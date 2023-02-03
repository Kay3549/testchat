import React from "react";
import { useEffect, useState, useRef } from 'react'
import "../styles/chat.scss"

const Footer = (props) => {

  const [message, setmessage] = useState(props.title);

  return (
    
    <form className="msger-inputarea" onSubmit={event =>{
      event.preventDefault();
      const msg = event.target.msg.value;
      props.sendmessage(msg);
      setmessage('');
    }}>
      <input type='text' 
      className="msger-input" 
      name='msg' 
      placeholder='메세지를 입력하세요' 
      value={message||''} onChange={event=>{
      setmessage(event.target.value);
    }}></input>
      <button 
        className="msger-send-btn"
      >보내기
      </button>
    </form>

  );
};

export default Footer;
