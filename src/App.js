import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Chat from './components/Chat';
import Message from './components/Message';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import "./style.scss";
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

function App() {

  const [users, setuser] = useState([]);
  const client = useRef({});
  const roomId = 'f41d7470-6ac5-476a-ac7f-7e4e3890b4d9';
  let sockJS;
  let stompClient;

  const connect = () => {

    sockJS = new SockJS('http://localhost:8080/ws/chat');
    stompClient = Stomp.over(sockJS);
    stompClient.connect({},
      (frame) => {
        console.log('연결'+{frame});
        stompClient.subscribe('/topic/room/' + roomId, (data) => {
          const newMessage = JSON.parse(data.body);
          // addMessage(newMessage.message);
      });
      },
      (err) => {
        console.log(err);
      });
    
  };

  const subscribe = () => {
    // client.current.subscribe('/topic/room'+{roomId}, ({ body }) => {
    //   setChatMessages((_chatMessages) => [..._chatMessages, JSON.parse(body)]);
    // });
  };


  useEffect(() => {
    // axios.post('http://localhost:8080/api/v1/room/create')
    //   .then(res => {
    //     setuser(res.data);
    //   });

    connect();
   
  }, []);

  console.log(users);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
