import React from "react";
import "./chatbot.css";

function Sidebar({ setMsg }) {
  const queries = [
    "What is sustainability?",
    "What is carbon footprint?",
    "How can I reduce plastic waste?",
    "Which materials are eco-friendly?",
    "How can I offset my carbon footprint?",
    "What are biodegradable products?",
    "Why is reducing plastic important for the environment?",
    "What are some eco-friendly alternatives to plastic?",
  ];

  return (
    <div className="sidebar">
      <h4 className="popular">POPULAR QUERIES</h4>
      {queries.map((q, i) => (
        <div key={i} className="query" onClick={() => setMsg(q)}>
          {q}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
