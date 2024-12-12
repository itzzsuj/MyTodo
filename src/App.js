import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import { useState } from 'react';



function App(){
  const[users,setUsers]=useState([
    {
        username:"itzzsuj",
        password:"hello@123"
    }
])

  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login users={users} ></Login>}></Route>
      <Route path='Signup' element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
      <Route path='/Landing' element={<Landing></Landing>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App