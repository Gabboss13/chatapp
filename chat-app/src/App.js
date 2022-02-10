import React, { useEffect, useState } from 'react';
import './App.css';
import Pusher from 'pusher-js'
import Sidebar from './Components/Sidebar/Sidebar';
import Chat from './Components/Chat/Chat';
import api from './Services/api'


function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    api.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })

  }, [])

  useEffect(() => {
    const pusher = new Pusher('d8f543d07886984bc191', {
      cluster: 'sa1'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage ])
    });

    return() =>{
      channel.unbind_all();
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="App">
      <div className='app-body'>

      <Sidebar />
      <Chat messages={messages}/>
      </div>

    </div>
  );
}

export default App;
