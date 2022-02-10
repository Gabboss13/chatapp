import React from 'react'
import './Sidebar.css';
import SidebarChat from '../SidebarChat/SidebarChat';



function Sidebar() {
  return (
    <div className='sidebar'>

        <div className='sidebar-header'>
          <div className='siderbar-headerRight'>
          {/* <button className='friend-button'>Amigos</button>
          <button className='chat-button'> Chat</button>
          <button className='vert-button'> Mais </button> */}
          </div>     
          </div>
          <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
              <input placeholder='Pesquisar...' type='text' />
            </div>
        </div>

        <div className='sidebar-chats'>
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />

        </div>
    </div>
  )
}

export default Sidebar