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

const Chat = () => { 

  const [users, setuser] = useState([]);
  const client = useRef({});
  const roomId = 'f41d7470-6ac5-476a-ac7f-7e4e3890b4d9';
  let sockJS;
  let stompClient;

  const getCurrentDate = ()=>{
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();

    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();

    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    var milliseconds = date.getMilliseconds();
    milliseconds = milliseconds < 10 ? '0' + milliseconds.toString() : milliseconds.toString();

    return year + month + day + hour + minites + seconds + milliseconds;
  }

  const connect = () => {

    sockJS = new SockJS('http://localhost:8080/ws/chat');
    stompClient = Stomp.over(sockJS);
    stompClient.connect({},
      (frame) => {
        console.log('연결'+{frame});
        stompClient.subscribe('/topic/room/' + roomId, (data) => {
          const newMessage = JSON.parse(data.body);
          // addMessage(newMessage.message);
      } , { id: "msg" });
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

    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={카메라} alt=''></img>
          <img src={더하기} alt=''></img>
          <img src={더보기} alt=''></img>
        </div>
      </div>

      <Messages></Messages>
      <Input sendmessage={(msg)=>{  
        const messageContent = {msg};
        if (messageContent && stompClient) {  // Form 에서 보낼 데이터가 있다면
    
            // for (let index = 0; index < 10; index++) {
            var chatMessage = {  // MessageDto 형식
                messageType: "TEXT",
                message: {msg},  // Text 박스에 들어온 데이터
                fromAt: getCurrentDate(),
                sender: "Agent",
            };
            stompClient.send('/app/chat/message/' + roomId, {}, JSON.stringify(chatMessage));
            //sleep(100);
            console.log("Send: " + JSON.stringify(chatMessage));
            // }
        }
      }}></Input>
    </div>
  )
}

export default Chat
