import React from 'react'
import './App.css'
import UserList from './page/UserList'
import { Route, Routes } from 'react-router-dom';
import SingleUser from './page/SingleUser';
import AddUser from './page/AddUser';
import EditUser from './page/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<UserList/>} />
        <Route path='/user/adduser' element={<AddUser/>} />
        <Route path='/userlist/:uid' element={<SingleUser />} />
        <Route path='/user/:eid' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App
