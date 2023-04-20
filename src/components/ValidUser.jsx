import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, author: "John", text: "Hello!" },
    { id: 2, author: "Jane", text: "Hi there!" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    const newId = messages.length + 1;
    const newAuthor = "John";
    const newText = newMessage.trim();
    if (newText !== "") {
      const newMessage = { id: newId, author: newAuthor, text: newText };
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleRemoveMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="flex flex-col h-screen w-[500px] mx-auto border-2">
      <div className="flex-1 p-4 overflow-y-scroll">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold">{message.author}</div>
              <button
                className="text-red-500"
                onClick={() => handleRemoveMessage(message.id)}
              >
                Remove
              </button>
            </div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleNewMessageSubmit} className="p-4">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="w-full p-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
