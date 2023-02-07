import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import axios from 'axios';
import "../styles/chat.scss"

import Header from "../components/Header";
import Footer from '../components/Footer';
import Messages from '../components/Messages';

//https://ordinarycoders.com/blog/article/react-chakra-ui
const roomId = '031219df-70e7-4eb6-acc6-acbda0bbc1cc';
let sockJS = new SockJS('http://192.168.1.209:8080/ws/chat');
let stompClient =Stomp.over(sockJS);;


// const connect = () => {

 
// }


const Chat = () => {

  const { roomid } = useParams();

  const [message, setMessage] = useState('');
  const addMessage = (message) => {
    setMessage((prev) => [...prev, message]); 
  };
  
  useEffect(() => {
    <Messages msg = {message}></Messages> 
  }, [message]);

  useEffect(() => {

    stompClient.connect({},
      (frame) => {
        stompClient.subscribe('/topic/room/' + roomId, (data) => {
          const newMessage = JSON.parse(data.body);
          addMessage(newMessage.message);
        }, { id: "msg" });
        console.log(frame);
      },
      (frame) => {
        console.log(frame);
      });

  }, []);


  return (

    <div style={{ height: '100vh' }}>
      <section className="msger">
        <Header />

       <Messages msg = {message}></Messages>

        <Footer sendmessage={(msg) => {
          const messageContent = msg;
          if (stompClient) {  // Form 에서 보낼 데이터가 있다면
            // for (let index = 0; index < 10; index++) {
            const chatMessage = {  // MessageDto 형식
              messageType: "TEXT",
              message: msg,  // Text 박스에 들어온 데이터
              sender: "Client",
            };
            stompClient.send('/app/chat/message/' + roomId, {}, JSON.stringify(chatMessage));
            //sleep(100);

            console.log("Send: " + JSON.stringify(chatMessage));

            // }
          } else {
            console.log("에러 err")
          }
          
        }}></Footer>

      </section>
    </div>
  )
}

export default Chat;