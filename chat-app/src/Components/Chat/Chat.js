import React , { useState } from "react";
import "./Chat.css";
import api from '../../Services/api'


function Chat({messages}) {

  const[input, setInput] = useState("")

  const sendMessage = async (e) => {
    e.preventDefault() 

    await api.post('/messages/new', {
      message : input,
      name: "Bento the Dog",
      timestamp: "It's 789 a test",
      received: false
    })

    setInput('')
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-headerInfo">
          <h3>Sala 1</h3>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((message) => (
        <p className={`chat-message ${message.received &&  'chat-receiver'}`}>
          <span className="chat-name">{message.name}</span>
         {message.message}
         <span className="chat-timestamp">{new Date().toUTCString()} </span>
        </p>
        ))}
      </div>

      <div className="chat-footer">
          <form>
              <input value={input} onChange={e=> setInput(e.target.value)} placeholder="Escreva a sua mensagem..." type="text"/>
              <button onClick={sendMessage} type="submit">Enviar mensagem</button>
          </form>
      </div>
    </div>
  );
}

export default Chat;
