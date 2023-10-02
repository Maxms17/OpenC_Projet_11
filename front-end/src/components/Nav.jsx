import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/main.css';
import { logout } from '../actions/authActions';
import logo from '../img/argentBankLogo.png';

function Nav() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };
  
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/user/signup')
      .then(response => response.json())
      .then(data => {
        const { firstName, lastName } = data;
        setUser({ firstName, lastName });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      });
  }, []);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.firstName} {user.lastName}
            </Link>
            <Link to="/login" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Nav;
