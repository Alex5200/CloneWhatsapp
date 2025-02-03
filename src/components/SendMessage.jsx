import React from 'react';
import axios from 'axios';

function SendMessage() {
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  const handleSendMessage = () => {
    if (!message.trim()) {
      setError('Введите сообщение');
      return;
    }
    console.log(message);
    const url = "https://1103.api.green-api.com/waInstance1103185402/sendMessage/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8";

    const payload = {
      "chatId": "79686697059@c.us", 
      "message": message
    };
    const headers = {
      'Content-Type': 'application/json'
    };

    try {
      const response = axios.post(url, payload, { headers });
      setResponse(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение"
        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Отправить
      </button>
      {error && <p className="text-red-500">{error}</p>}

    </div>
  );
}

export default SendMessage;