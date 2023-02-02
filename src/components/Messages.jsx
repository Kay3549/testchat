import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Message from './Message'

const Messages = () => {

  const [users, setuser] = useState([]);
//   const roomId = props.roomId;
//   const message = props.message;  
//   console.log(message);
    
  useEffect(()=>{
      axios.get('http://192.168.1.209:8080/api/v1/message/recv/9104cde8-4ee9-4799-bdec-f24087269959') 
      .then(res=>{
          setuser(res.data);
      })
  },[]); 

//   console.log(users)

      return (
        <div className='messages'>
            {/* {users.room.contents.map((k)=>( 
                <Message msg={k}></Message>
            ))} */}
        </div>
      )

}

export default Messages
