import React, { useEffect, useState } from "react";
import "./chat_message.css";
import io from "socket.io-client";

const socket = io.connect("https://gameplay-for-scrum.herokuapp.com", {
  transports: ["websocket"],
}); //Listen the websocket from 4000 port

export default function RetroNotes() {
  const [state, setState] = useState({ message: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("chat", ({ message }) => {
      setChat([...chat, { message }]);
    });
  });

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault(); //prevent for refreshing and restarting
    const { message } = state;
    console.log(message);
    socket.emit("chat", {
      message: message,
    });
    setState({ message: "" });
  };

  const renderChat = () => {
    return chat.map(({ message }, index) => (
      <div key={index} className="mt-2 p-2">
        <p>
          <span>{message}</span>{" "}
        </p>
      </div>
    ));
  };

  return (
    <div className="product-backlog">
      <h2 className="mb-2 mt-2">Retrospective Notes</h2>
      <div className="board retro">
        <div id="chat-window">
          <div id="output">{renderChat()}</div>
        </div>
        <div>
          <hr />
          <form onSubmit={onMessageSubmit} className="retro-form">
            <input
              type="text"
              className="retro-input"
              id="message"
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              label="Message"
              placeholder="message"
            />
            <button className="button-chat" id="submitButton">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
