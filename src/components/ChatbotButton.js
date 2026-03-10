import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChatbotButton() {
  const navigate = useNavigate();
  const currentLocation = useLocation();

  // Hide button on chatbot page
  if (currentLocation.pathname === "/chatbot" || currentLocation.pathname === "/otp" || currentLocation.pathname === "/security-questions" || currentLocation.pathname === "/login" || currentLocation.pathname === "/registration") {
    return null;
  }

  return (
    <div
      onClick={() => navigate("/chatbot")}
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#131921",
        color: "white",
        fontSize: "28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        zIndex: "1000"
      }}
    >
      💬
    </div>
  );
}

export default ChatbotButton;