import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")

client = InferenceClient(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    token=HF_API_KEY
)

KEYWORDS = [
    "sustainability",
    "carbon",
    "climate",
    "environment",
    "pollution",
    "plastic",
    "eco",
    "green",
    "recycle",
    "renewable",
    "waste",
    "biodegradable",
    "circular economy",
    "global warming"
]


@csrf_exempt
def chat(request):

    if request.method == "POST":

        data = json.loads(request.body)
        question = data.get("question", "").lower().strip()

        if not any(word in question for word in KEYWORDS):
            return JsonResponse({
                "answer": "I am EcoShield AI. I answer sustainability and environmental questions only."
            })

        try:

            response = client.chat_completion(
                messages=[
                    {
                        "role": "system",
                        "content": """
You are EcoShield AI, a sustainability expert.

Rules:
- Provide clear answers
- Use short paragraphs
- Use bullet points when possible
- Avoid markdown symbols
"""
                    },
                    {
                        "role": "user",
                        "content": question
                    }
                ],
                max_tokens=500
            )

            answer = response.choices[0].message.content.strip()

            answer = answer.replace("**", "")
            answer = answer.replace("•", "-")

            return JsonResponse({"answer": answer})

        except Exception as e:
            print("HF Error:", e)

            return JsonResponse({
                "answer": "AI service temporarily unavailable."
            })