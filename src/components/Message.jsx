import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function Message() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [responseName, setResponseName] = useState("");
  const [responseText, setResponseText] = useState("");

  const getMessages = useCallback(async () => {
    const payload = {};
    const headers = {};
    const url = "https://1103.api.green-api.com/waInstance1103185402/receiveNotification/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8"

    try {
      const response = await axios.get(url, headers, payload);
      const data = response.data;

      if ( data.body.senderData && data.body.senderData.chatName) {

          setMessages(prevMessages => {
            const newMessages = [...prevMessages];
            const existingMessage = newMessages.find(msg => msg.receiptId === data.receiptId);
            if (existingMessage) {
              return newMessages;
            }
            newMessages.push(data);
            return newMessages;
          });
        console.log(messages);
        console.log(data)
          let urldel = "https://1103.api.green-api.com/waInstance1103185402/deleteNotification/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8/" + data.receiptId;
          axios.delete(urldel, {
            headers,
            data: payload
          })
          .then(response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
          })
          .catch(error => {
            console.error(error);
          });
        

        try {
          setResponseName(data.body.senderData.chatName + " sender: " + data.body.senderData.sender);
          setResponseText(data.body.messageData.textMessageData.textMessage);
        } catch (ex) {
           console.log("err" + ex)
        }
      }else{
        let urldel = "https://1103.api.green-api.com/waInstance1103185402/deleteNotification/f476c866e2094333936481ec7903b7bca2461b08ebba4aa3b8/" + data.receiptId;
          axios.delete(urldel, {
            headers,
            data: payload
          })
          .then(response => {
          
          })
          .catch(error => {
            console.error(error);
          });
      }
    } catch (ex) {
      console.log(ex)
    }
  }, []);
  setInterval(() => getMessages(), 1000);
  useEffect(() => {
    const intervalId = setInterval(getMessages, 1000);
    return () => clearInterval(intervalId);
  }, [messages]);

  return (
    <div>
      {error? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              <p>
                {message.body.senderData.chatName} sender: {message.body.senderData.sender} name: {message.body.senderData.senderName}
              </p>
              <p>{message.body.messageData.textMessageData.textMessage}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Message;