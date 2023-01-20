import React from 'react'
import 카메라 from "../img/카메라.jpg";
import 더하기 from "../img/더하기.PNG";
import 더보기 from "../img/더보기.png";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
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
      <Input></Input>
    </div>
  )
}

export default Chat
