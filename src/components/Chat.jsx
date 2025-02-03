import React from 'react';
import Message from './Message';
import Contact from './Contact';
import SendMessage from './SendMessage';
import axios from 'axios';

function Chat() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-y-scroll">
      <div className="p-4 bg-white shadow-md">
        <h2 className="font-bold text-lg">Сообщения</h2>
        <div className="h-64 overflow-y-scroll">
          <Message />
        </div>
        <SendMessage/>
      </div>
      <div className="p-4 bg-white shadow-md">
        <h2 className="font-bold text-lg">Контакты</h2>
        <Contact />

      </div>
    </div>
  );
}

export default Chat;