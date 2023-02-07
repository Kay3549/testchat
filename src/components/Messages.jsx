import React, { useEffect, useRef } from "react";
import { useState } from "react";
import axios from 'axios';

const Messages = (props) => {

  const [users, setuser] = useState([]);
  const msg = props.msg;

  console.log(msg)

  useEffect(() => {
    axios.get('http://192.168.1.209:8080/api/v1/message/recv/031219df-70e7-4eb6-acc6-acbda0bbc1cc')
      .then(res => {
        setuser(res.data.room.contents);
      })
  }, [msg]);

  const left = {
    align: 'msg left-msg',
  };

  const right = {
    align: 'msg right-msg',
  }


  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  }; //AlwaysScrollToBottom

  return (
    <div className="msger-chat">
      {users?.map((item, index) => {
        if (item.sender === 'Client') {
            let a = item.fromAt;
            let b = a.substr(11, 5);
            //오른쪽
            return (
              <div key={index} className={right.align}>

                <div className="msg-bubble">
                  <div className="msg-text">
                    {item.message}
                  </div>

                  <div className="msg-info">
                    <div className="msg-info-time">{b}</div>
                  </div>

                </div>
              </div>

            );
          } else {
            let a = item.fromAt;
            let b = a.substr(11, 5);
            //왼쪽에
            return (
              <div key={index} className={left.align}>

                <div className="msg-bubble">
                  <div className="msg-text">
                    {item.message}
                  </div>
                  <div className="msg-info left">
                    <div className="msg-info-time">{b}</div>
                  </div>

                </div>
              </div>
            )
          }
        }
        )
      }
      <AlwaysScrollToBottom />
    </div>
  );
};

export default Messages;
