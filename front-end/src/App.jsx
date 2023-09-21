// App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Login from './components/Login';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} />
      <Route path="/" exact component={Home} />
      <Route
        path="/profile"
        render={() => (isAuthenticated ? <ProfilePage /> : <Redirect to="/login" />)}
      />
      <Route
        path="/login"
        render={() => (!isAuthenticated ? <Login /> : <Redirect to="/profile" />)}
      />
    </BrowserRouter>
  );
}

export default App;
