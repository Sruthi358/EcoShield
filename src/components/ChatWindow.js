import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./chatbot.css";

function ChatWindow({ msg, setMsg }) {
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const userMessage = msg;

    setChat((prev) => [...prev, { type: "user", text: userMessage }]);

    setMsg("");
    setLoading(true);


    try {
      const res = await axios.post("http://localhost:8000/api/chatbot/chat/", {
        question: userMessage,
      });

      setChat((prev) => [...prev, { type: "bot", text: res.data.answer }]);
    } catch {
      setChat((prev) => [
        ...prev,
        { type: "bot", text: "Server error. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbox">
      <h2>ASK OUR AI</h2>
      <p className="subtitle">Smart answers for your sustainable journey.</p>

      <div className="messages">
        {chat.map((c, i) => (
          <div key={i} className={`message-row ${c.type} fade-in`}>
            {c.type === "bot" && <div className="avatar bot-avatar">🤖</div>}

            <div className={`bubble ${c.type}`}>
              {c.text.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {c.type === "user" && <div className="avatar user-avatar">👤</div>}
          </div>
        ))}

        {loading && (
          <div className="message-row bot fade-in">
            <div className="avatar bot-avatar">🤖</div>

            <div className="bubble bot">
              <div className="typing-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="input-area">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
        />

        <button onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}

export default ChatWindow;
