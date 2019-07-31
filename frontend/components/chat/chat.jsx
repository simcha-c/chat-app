import React from 'react';
import ChatMessages from './chat_messages/chat_messages';
import ChatGroups from './chat_groups/chat_groups';

function Chat(props) {
  return (
    <section className="chat-section">
      <ChatGroups />
      <ChatMessages />
    </section>
  )
}

export default Chat;