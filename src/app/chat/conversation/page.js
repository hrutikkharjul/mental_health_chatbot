'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Conversation() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm here to listen and help. How are you feeling today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    try {
      setIsLoading(true);
      setError(null);

      // Add user message to chat
      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      // Send request to API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to process the request');
      }

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content: data.response,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setError("Sorry, there was an error processing your request. Please try again.");
      console.error("API error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">Chat with Well Being</h1>
          {/* Chat Messages */}
          <div className="space-y-4 mb-8 h-[60vh] overflow-y-auto p-4 border rounded-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
              {error}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`px-6 py-2 rounded-lg ${
                isLoading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={isLoading || !input.trim()}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Back to Chat Options */}
          <Link href="/chat" className="mt-8 block text-center text-blue-600 hover:text-blue-700">
            ← Back to Chat Options
          </Link>
        </div>
      </div>
    </div>
  );
}