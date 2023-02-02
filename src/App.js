import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Chat from './components/Chat';
import Message from './components/Message';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import "./style.scss";
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import Messages from './components/Messages';

function App() {

  
  return (
    <div className="App">
     <Home></Home>
    </div>
  );
}

export default App;
