// // import { useState } from "react";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // export default function SecurityQuestions() {
// //   const { state } = useLocation();
// //   const navigate = useNavigate();

// //   const [answers, setAnswers] = useState({
// //     city: "",
// //     color: "",
// //   });

// //   const [error, setError] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);

// //   const submit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setIsLoading(true);

// //     try {
// //       // await axios.post("http://localhost:8000/api/mfa/verify-questions/", {
// //       //   user_id: state.user_id,
// //       //   city: answers.city,
// //       //   color: answers.color,
// //       // });

// //       // navigate("/eco-home");
// //       const res = await axios.post(
// //         // "http://localhost:8000/api/mfa/verify-questions/",
// //         // "http://10.209.81.82:8000/api/mfa/verify-questions/",
// //         `${process.env.REACT_APP_PHONE_API_URL}/api/mfa/verify-questions/`,
// //         {
// //           user_id: state.user_id,
// //           city: answers.city,
// //           color: answers.color,
// //         }
// //       );

// //       /* ✅ STEP 4: STORE LOGIN SESSION */
// //       localStorage.setItem("access_token", res.data.access);
// //       localStorage.setItem("refresh_token", res.data.refresh);
// //       localStorage.setItem("user", JSON.stringify(res.data.user));
// //       localStorage.setItem("is_admin", res.data.user.is_admin);

// //       /* ➡️ FINAL REDIRECT */
// //       navigate("/eco-home", { replace: true });
// //     } catch {
// //       setError("Incorrect answers. Please try again.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// //       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //         <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
// //           Security Verification
// //         </h2>
// //         <p className="mt-2 text-center text-sm text-gray-500">
// //           Answer the security questions to continue
// //         </p>
// //       </div>

// //       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// //         {error && (
// //           <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
// //             {error}
// //           </div>
// //         )}

// //         <form onSubmit={submit} className="space-y-6">
// //           {/* Birth City */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-900">
// //               Birth City
// //             </label>
// //             <div className="mt-2">
// //               <input
// //                 type="text"
// //                 required
// //                 value={answers.city}
// //                 onChange={(e) =>
// //                   setAnswers({ ...answers, city: e.target.value })
// //                 }
// //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-700 focus:outline-2 focus:outline-teal-600"
// //                 placeholder="Enter your birth city"
// //               />
// //             </div>
// //           </div>

// //           {/* Favorite Color */}
// //           <div>
// //             <label className="block text-sm font-medium text-gray-900">
// //               Favorite Color
// //             </label>
// //             <div className="mt-2">
// //               <input
// //                 type="text"
// //                 required
// //                 value={answers.color}
// //                 onChange={(e) =>
// //                   setAnswers({ ...answers, color: e.target.value })
// //                 }
// //                 className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-700 focus:outline-2 focus:outline-teal-600"
// //                 placeholder="Enter your favorite color"
// //               />
// //             </div>
// //           </div>

// //           {/* Submit */}
// //           <div>
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className={`flex w-full justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 ${
// //                 isLoading ? "opacity-50 cursor-not-allowed" : ""
// //               }`}
// //             >
// //               {isLoading ? "Verifying..." : "Verify Answers"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import axios from "axios";

// export default function SecurityQuestions() {

//   const [form, setForm] = useState({
//     q1: "",
//     a1: "",
//     q2: "",
//     a2: ""
//   });

//   const questions = [
//     { key: "sign", label: "What is your Zodiac Sign?" },
//     { key: "city", label: "What is your birth city?" },
//     { key: "school", label: "What is your first school name?" },
//     { key: "sibling", label: "How many siblings do you have?" },
//     { key: "friend", label: "What is your bestfriend name?" },
//     { key: "mother", label: "What is your mother’s first name?" }
//   ];

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_PHONE_API_URL}/api/mfa/setup-security-questions/`,
//         form,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access_token")}`
//           }
//         }
//       );

//       alert("Security questions saved successfully");

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-xl font-bold mb-6 text-center">
//         Setup Security Questions
//       </h2>

//       <form onSubmit={submit} className="space-y-6">

//         {/* Question 1 */}
//         <div>
//           <label className="block mb-2 font-medium">Question 1</label>

//           <select
//             className="w-full border p-2 rounded"
//             value={form.q1}
//             onChange={(e)=>setForm({...form,q1:e.target.value})}
//             required
//           >
//             <option value="">Select a question</option>

//             {questions.map((q)=>(
//               <option key={q.key} value={q.key}>
//                 {q.label}
//               </option>
//             ))}

//           </select>

//           <input
//             type="text"
//             placeholder="Answer"
//             className="w-full border p-2 rounded mt-2"
//             value={form.a1}
//             onChange={(e)=>setForm({...form,a1:e.target.value})}
//             required
//           />
//         </div>

//         {/* Question 2 */}
//         <div>
//           <label className="block mb-2 font-medium">Question 2</label>

//           <select
//             className="w-full border p-2 rounded"
//             value={form.q2}
//             onChange={(e)=>setForm({...form,q2:e.target.value})}
//             required
//           >
//             <option value="">Select a question</option>

//             {questions.map((q)=>(
//               <option key={q.key} value={q.key}>
//                 {q.label}
//               </option>
//             ))}

//           </select>

//           <input
//             type="text"
//             placeholder="Answer"
//             className="w-full border p-2 rounded mt-2"
//             value={form.a2}
//             onChange={(e)=>setForm({...form,a2:e.target.value})}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-teal-700 text-white p-2 rounded"
//         >
//           Save Security Questions
//         </button>

//       </form>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function SecurityQuestions() {

//   const [showA1, setShowA1] = useState(false);
//   const [showA2, setShowA2] = useState(false);

//   const [form, setForm] = useState({
//     q1: "",
//     a1: "",
//     q2: "",
//     a2: ""
//   });

//   const questions = [
//     { key: "sign", label: "What is your Zodiac Sign?" },
//     { key: "city", label: "What is your birth city?" },
//     { key: "school", label: "What is your first school name?" },
//     { key: "sibling", label: "How many siblings do you have?" },
//     { key: "friend", label: "What is your bestfriend name?" },
//     { key: "mother", label: "What is your mother’s first name?" }
//   ];

//   return (
//     <div className="max-w-md mx-auto mt-10">

//       <form className="space-y-6">

//         {/* Question 1 */}
//         <div>
//           <select
//             className="w-full border p-2 rounded"
//             value={form.q1}
//             onChange={(e)=>setForm({...form,q1:e.target.value})}
//           >
//             <option value="">Select Question</option>
//             {questions.map((q)=>(
//               <option key={q.key} value={q.key}>{q.label}</option>
//             ))}
//           </select>

//           {/* Answer Input */}
//           <div className="relative mt-2">
//             <input
//               type={showA1 ? "text" : "password"}
//               placeholder="Answer"
//               className="w-full border p-2 rounded pr-10"
//               value={form.a1}
//               onChange={(e)=>setForm({...form,a1:e.target.value})}
//             />

//             <span
//               onClick={()=>setShowA1(!showA1)}
//               className="absolute right-3 top-2 cursor-pointer"
//             >
//               {showA1 ? "" : "👁"}
//             </span>
//           </div>
//         </div>

//         {/* Question 2 */}
//         <div>
//           <select
//             className="w-full border p-2 rounded"
//             value={form.q2}
//             onChange={(e)=>setForm({...form,q2:e.target.value})}
//           >
//             <option value="">Select Question</option>
//             {questions.map((q)=>(
//               <option key={q.key} value={q.key}>{q.label}</option>
//             ))}
//           </select>

//           {/* Answer Input */}
//           <div className="relative mt-2">
//             <input
//               type={showA2 ? "text" : "password"}
//               placeholder="Answer"
//               className="w-full border p-2 rounded pr-10"
//               value={form.a2}
//               onChange={(e)=>setForm({...form,a2:e.target.value})}
//             />

//             <span
//               onClick={()=>setShowA2(!showA2)}
//               className="absolute right-3 top-2 cursor-pointer"
//             >
//               {showA2 ? "" : "👁"}
//             </span>
//           </div>
//         </div>

//       </form>
//     </div>
//   );
// }

import { useState } from "react";

export default function SecurityQuestions() {
  const [showA1, setShowA1] = useState(false);
  const [showA2, setShowA2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    q1: "",
    a1: "",
    q2: "",
    a2: "",
  });

  const questions = [
    { key: "sign", label: "What is your Zodiac Sign?" },
    { key: "city", label: "What is your birth city?" },
    { key: "school", label: "What is your first school name?" },
    { key: "sibling", label: "How many siblings do you have?" },
    { key: "friend", label: "What is your best friend name?" },
    { key: "mother", label: "What is your mother’s first name?" },
  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (form.q1 === form.q2) {
  //     alert("Please select two different questions.");
  //     return;
  //   }

  //   if (!form.a1 || !form.a2) {
  //     alert("Please enter answers for both questions.");
  //     return;
  //   }

  //   console.log("Security Questions:", form);

  //   // send to backend here
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (form.q1 === form.q2) {
  //     alert("Please select two different questions.");
  //     return;
  //   }

  //   if (!form.a1 || !form.a2) {
  //     alert("Please enter answers for both questions.");
  //     return;
  //   }

  //   try {
  //     setIsLoading(true);

  //     console.log("Security Questions:", form);

  //     // call backend here
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.q1 === form.q2) {
      alert("Please select two different questions.");
      return;
    }

    if (!form.a1 || !form.a2) {
      alert("Please enter answers for both questions.");
      return;
    }

    try {
      setIsLoading(true);

      const res = await fetch(
        "http://localhost:8000/api/mfa/verify-questions/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: localStorage.getItem("user_id"),
            [form.q1]: form.a1,
            [form.q2]: form.a2,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Verification failed");
      }

      /* STORE LOGIN SESSION */
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("is_admin", data.user.is_admin);

      window.location.href = "/eco-home";
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-700 focus:outline-2 focus:outline-teal-600";

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8">
      <div className="max-w-md mx-auto w-full">
        {/* <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 mb-8">
          Security Verification
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
           Answer the security questions to continue
         </p> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-5">
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            Security Verification
          </h2>
          <p className=" text-center text-sm text-gray-500">
            Answer the security questions to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Question 1
            </label>

            <select
              className={`${inputClass} mt-2`}
              value={form.q1}
              onChange={(e) => setForm({ ...form, q1: e.target.value })}
              required
            >
              <option value="">Select Question</option>

              {questions.map((q) => (
                <option key={q.key} value={q.key} disabled={form.q2 === q.key}>
                  {q.label}
                </option>
              ))}
            </select>

            {/* Answer */}
            <div className="relative mt-3">
              <input
                type={showA1 ? "text" : "password"}
                placeholder="Answer"
                className={inputClass}
                value={form.a1}
                onChange={(e) => setForm({ ...form, a1: e.target.value })}
                required
              />

              <button
                type="button"
                onClick={() => setShowA1(!showA1)}
                className="absolute right-3 top-2 text-gray-600"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Question 2
            </label>

            <select
              className={`${inputClass} mt-2`}
              value={form.q2}
              onChange={(e) => setForm({ ...form, q2: e.target.value })}
              required
            >
              <option value="">Select Question</option>

              {questions.map((q) => (
                <option key={q.key} value={q.key} disabled={form.q1 === q.key}>
                  {q.label}
                </option>
              ))}
            </select>

            {/* Answer */}
            <div className="relative mt-3">
              <input
                type={showA2 ? "text" : "password"}
                placeholder="Answer"
                className={inputClass}
                value={form.a2}
                onChange={(e) => setForm({ ...form, a2: e.target.value })}
                required
              />

              <button
                type="button"
                onClick={() => setShowA2(!showA2)}
                className="absolute right-3 top-2 text-gray-600"
              >
                👁️
              </button>
            </div>
          </div>

          {/* Submit */}
          {/* <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-teal-600"
          >
            Save Security Questions
          </button> */}
          <button
            type="submit"
            disabled={isLoading}
            className={`flex w-full justify-center rounded-md bg-teal-700 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-teal-600 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Verifying..." : "Verify Answers"}
          </button>
        </form>
      </div>
    </div>
  );
}
