import React from 'react'

const Message = ({ msg }) => {

  const a = 'C'

  return (
    <div className={`message ${a === msg.sender && 'C'}`}>

      <div className="messageContent" >
        <div>
          {msg.message}
        </div>

      </div>
    </div>
  )
}

export default Message
