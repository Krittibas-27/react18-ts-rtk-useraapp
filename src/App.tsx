import React from 'react'
import './App.css'
import UserList from './page/UserList'
import { Route, Routes } from 'react-router-dom';
import SingleUser from './page/SingleUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList/>} />
        <Route path='/userlist/:uid' element={<SingleUser />} />
      </Routes>
    </div>
  );
}

export default App
