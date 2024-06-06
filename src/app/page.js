"use client"; // This is a client component

import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSendMessage = () => {
    const message = newMessage.trim();
    if (message !== "") {
      setMessages([...messages, { text: message, sender: "user" }]);
      setNewMessage("");
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-start justify-between bg-illusion rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center align-middle w-full bg-remy p-4 rounded-t-lg">
          <img src="https://i.ibb.co/C7gKLBN/Screenshot-1.png" className="h-12 w-12 m-1 bg-red-500 rounded-full"/> 
        </div>
        <div className="flex-1 p-4 text-black max-h-80 min-h-80 w-full" style={{ height: "300px", overflowY: "auto" }}>
          <div className="flex flex-col space-y-2">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${message.sender === "user"
                    ? "bg-remy text-gray-600 self-end"
                    : "bg-remy text-gray-600 self-start"
                  } p-2 rounded-lg max-w-2/3`}
              >
                {message.text}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center w-full bg-remy p-4 rounded-b-lg">
          <input
            ref={inputRef}
            type="text"
            placeholder="Typ een berichtje..."
            autoFocus
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-illusion text-gray-500 px-4 py-2 rounded-lg focus:outline-none"
          />
          {/* <button
            type="submit"
            onClick={handleSendMessage}
            className="ml-2 p-2 rounded-full focus:outline-none"
          >
            Stuur
          </button> */}
        </div>
      </div>
    </main>
  );
}
