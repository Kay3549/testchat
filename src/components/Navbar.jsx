import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src='https://images.pexels.com/photos/14699708/pexels-photo-14699708.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''></img>
        <span>Jhon</span>
        <button>logout</button>

      </div>
    </div>
  )
}

export default Navbar
