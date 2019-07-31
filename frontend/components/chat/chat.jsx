import React from 'react';
import ChatMessages from './chat_messages/chat_messages';

function Chat(props) {
  return (
    <section className="chat-section">

      <ChatMessages />
    </section>
  )
}

export default Chat;