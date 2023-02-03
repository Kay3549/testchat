import React from 'react';
import { useParams } from "react-router-dom";
import { useRef } from 'react';
import "../styles/chat.scss"

//https://ordinarycoders.com/blog/article/react-chakra-ui

const Chat = () => {
  const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
  const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
  const BOT_NAME = "BOT";
  const PERSON_NAME = "Sajad";

  const { roomid } = useParams();
  console.log("Chat roomId:", roomid);

  return (
    <div style={{height: '100vh'}}>
    <section className="msger">
    <header className="msger-header">
    <div className="msger-header-title">
      <i className="fas fa-comment-alt">111</i> 
    </div>
  </header>

      <main className="msger-chat">
        <div className="msg left-msg"> 
          <div
            className="msg-img"
            style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)' }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">BOT</div>
              <div className="msg-info-time">12:45</div>
            </div>

            <div className="msg-text">
              고객 메시지. 😄 고객 메시sssssssssssssssssssssssssssssssssssssssssss지.고객 메시지.고객 메시지.고객 메시지.고객 메시지.고객 메시지.고객 메시지.
            </div>
          </div>
        </div>

        <div className="msg right-msg">

          <div
            className="msg-img"
            style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)' }}
          ></div>

          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">Sajad</div>
              <div className="msg-info-time">12:46</div>
            </div>

            <div className="msg-text">
              상담원 메시지 상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지상담원 메시지

            </div>
          </div>
        </div>
      </main>

      <form className="msger-inputarea" /*onSubmit={handleSubmit}*/>
        <input type="text" className="msger-input" placeholder="Enter your message..." />
        <button type="submit" className="msger-send-btn">보내기</button>
      </form>
    </section>
    </div>
  )
}

export default Chat;