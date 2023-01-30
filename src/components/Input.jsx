import React from 'react'
import { useEffect, useState, useRef } from 'react'
import 사진 from '../img/사진.PNG'
import 클립 from '../img/클립.PNG'

const Input = (props) => {

   const [message, setmessage] = useState(props.title);

  return (
    <form className='input' onSubmit={event =>{
      event.preventDefault();
      const msg = event.target.msg.value;
      props.sendmessage(msg);
      setmessage('');
    }}>

      <input type='text' name='msg' placeholder='Type Something...' value={message||''} onChange={event=>{
        setmessage(event.target.value);
      }}></input>
      <div className="send">
        <img src={클립} alt=''></img>
        <input type='file' style={{display: 'none'}} id = 'file'></input>
        <label htmlFor='file'>
          <img src={사진} alt=''></img>
        </label>
        <button>Send</button>
      </div>
    </form>
  )
}

export default Input
