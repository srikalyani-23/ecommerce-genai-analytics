import { useState } from "react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!question.trim()) return;

    const userQuestion = question;

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userQuestion,
      },
    ]);

    setQuestion("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: userQuestion,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: data.answer,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: data.message || "Unable to process the question.",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Unable to connect to the backend server.",
        },
      ]);
    }
  };

  return (
    <div className="chatbot">

      <div className="chat-header">
        🤖 AI Data Assistant
      </div>

      <div className="chat-messages">

        {messages.length === 0 && (
          <div className="welcome-message">
            Ask me anything about your sales data.
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type}`}
          >
            {message.text}
          </div>
        ))}

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask about your sales data..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button onClick={handleSend}>
          Send
        </button>

      </div>

    </div>
  );
}

export default Chatbot;