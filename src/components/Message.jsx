import React from 'react'

const Message = ({users}) => { 

  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/14699708/pexels-photo-14699708.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''></img>
        <span>just now</span>
      </div>
      
      <div className="messageContent" >
      {users.contents.map((k) =>{
            return (<div key={k.id}>
                {k.message}
            </div>)
        })} 

      </div>
    </div>
  )
}

export default Message
