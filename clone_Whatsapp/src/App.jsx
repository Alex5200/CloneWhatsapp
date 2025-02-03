import React from 'react';
import './index.css';
import Chat from './components/Chat';
import Header from './components/Header';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <Chat />
    </div>
  );
}

export default App;