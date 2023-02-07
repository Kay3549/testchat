import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chat2 from './pages/Chat2';

function App() {
  
  return (
    <div className="App" >
      <header>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/service/chat2/*" element={<Chat2 />}>
            <Route path=":roomid" element={<Chat2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
