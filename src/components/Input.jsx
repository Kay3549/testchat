import React from 'react'
import 사진 from '../img/사진.PNG'
import 클립 from '../img/클립.PNG'

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type Something...'></input>
      <div className="send">
        <img src={클립} alt=''></img>
        <input type='file' style={{display: 'none'}} id = 'file'></input>
        <label htmlFor='file'>
          <img src={사진} alt=''></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
