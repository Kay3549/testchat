import 카메라 from "../img/카메라.jpg";
import 더하기 from "../img/더하기.PNG";
import 더보기 from "../img/더보기.png";
import Messages from './Messages';
import Input from './Input';
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import "../style.scss";
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import uuid from 'react-uuid';


const Chat = () => {

  const [users, setuser] = useState([]);
  const client = useRef({});
  const [contents, setContents] = React.useState('');
  const [message, setMessage] = React.useState('');
  // const [roomId, setroomID] = useState([]);
  const roomId = '9104cde8-4ee9-4799-bdec-f24087269959';
  const sockJS = new SockJS('http://192.168.1.209:8080/ws/chat');
  const stompClient = Stomp.over(sockJS);;

  const addMessage = (message) => {
    setContents((prev) => [...prev, message]);
  };

  useEffect(() => {

    stompClient.connect({},
      (frame) => {
        stompClient.subscribe('/topic/room/' + roomId, (data) => {
          const newMessage = JSON.parse(data.body);
          // addMessage(newMessage);
          // setMessage(newMessage.message)
          console.log(newMessage.message);
        }, { id: "msg" });
        console.log(frame);
      },
      (frame) => {
        console.log(frame);
      });

  }, []);

  // useEffect(() => {
  //   Change();
  // }, [i]);

  return (

    
    <div className='chat'>
      <div className="chatInfo">
        <span>{message}</span>
        <div className="chatIcons">
          <img src={카메라} alt=''></img>
          <img src={더하기} alt=''></img>
          <img src={더보기} alt=''></img>
        </div>
      </div>

      <Messages></Messages> 
      <Input sendmessage={(msg) => {
        const messageContent = msg;
        if (stompClient) {  // Form 에서 보낼 데이터가 있다면
          // for (let index = 0; index < 10; index++) {
            const chatMessage = {  // MessageDto 형식
              messageType: "TEXT",
              message: msg,  // Text 박스에 들어온 데이터
              sender: "C",
            };
            stompClient.send('/app/chat/message/' + roomId, {}, JSON.stringify(chatMessage));
            //sleep(100);
            
            console.log("Send: " + JSON.stringify(chatMessage));
            
          // }
        }else{
          console.log("에러 err")
        }
        setMessage(msg)
      }}></Input>
    </div>
  )
}

export default Chat
