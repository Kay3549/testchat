import React from 'react'
import Add from '../img/아바타.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lama Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='email'></input>
                <input type='password' placeholder='password'></input>
                
                <button>Sign in</button>
            </form>
        <p>You don't have an account? Regiter</p>
        </div>
      
    </div>
  )
}

export default Login