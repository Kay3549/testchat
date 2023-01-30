import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Message from './Message'

const Messages = () => {

  const [users, setuser] = useState([]);
    
  useEffect(()=>{
      axios.get('/데이터 목록(0119).json')
      .then(res=>{
          setuser(res.data);
      })
      
  },[]); 

      return (
        <div className='messages'>
            {/* <Message users={users}></Message> */}
        </div>
      )

}

export default Messages
