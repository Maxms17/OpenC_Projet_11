
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated)
  return (

    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route
          path="/profile"
          render={() => (isAuthenticated ? <ProfilePage /> : <Login />)}
        />
        <Route
          path="/login"
          render={() => (!isAuthenticated ? <Login /> : <ProfilePage />)}
        /> */}
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;