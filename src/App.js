import React from 'react';

import ReactDOM from 'react-dom/client';
import { useState } from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./index.css"
import Login from './Pages/login';
import Signup from "./Pages/Signup";
import Landing from "./Pages/Landing";
;

function App(){
  const [users,setusers]=useState(
    [
        {
            username :"shahul",
            password:"123"
        }
    ]
)
  return(
    <div>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
  <Route path='/Signup' element={<Signup users={users} setusers={setusers}/>}></Route>
  <Route path='/Landing' element={<Landing/>}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
