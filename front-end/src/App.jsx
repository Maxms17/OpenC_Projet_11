import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/main.css'

import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import Login from './pages/Login';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" element={ (isAuthenticated ? <ProfilePage /> : <Login /> )} />
        <Route path="/login" element={ (isAuthenticated ? <Login /> : <Login /> )} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;