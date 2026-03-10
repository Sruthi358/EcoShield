import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import { Link } from 'react-router-dom';
import "./chatbot.css";

function ChatPage() {
  const [msg, setMsg] = useState("");

  return (
    <>
      <header className="bg-gray-800 text-white px-6 py-4">
        <nav className="flex items-center justify-between text-sm font-medium gap-4 flex-wrap">
        {/* <p className="font-bold text-xl">EcoShield.</p> */}
        <Link to="/" className="font-bold text-xl">
  EcoShield.
</Link>
          <ul className="ml-auto mr-8">
            <li>

              <Link to="/" className="hover:text-teal-700">
                Back
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <div className="layout">
          <Sidebar setMsg={setMsg} />

          <ChatWindow msg={msg} setMsg={setMsg} />
        </div>
      </div>
    </>
  );
}

export default ChatPage;
