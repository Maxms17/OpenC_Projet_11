import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/authActions';
import { setUser } from '../actions/userActions';
import '../css/main.css';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [utilisateur, setUtilisateur] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (email && password) {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          dispatch(login());
          const token = data.body.token;
          try {
            const utilisateurResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
              },
            });

            if (utilisateurResponse.ok) {

              const utilisateurData = await utilisateurResponse.json();
              setUtilisateur(utilisateurData);
              console.log('utilisateur',utilisateurData)
              
              dispatch(setUser(utilisateurData));
              dispatch(setUser({
                email: utilisateurData.body.email,
                userName: utilisateurData.body.userName, 
                firstName: utilisateurData.body.firstName,
                lastName: utilisateurData.body.lastName,
                token: utilisateurData.body.token,
              }));

              navigate('/profile');

            } else {
              console.error('Erreur lors de la récupération des informations de l\'utilisateur');
            }
          } catch (error) {
            console.error('Erreur de donnée', error);
          }

        } else {
          console.error('Erreur d\'authentification');
        }
      } catch (error) {
        console.error('Erreur de réseau', error);
      }
    } else {
      console.error('Erreur connexion');
    }
  };
  
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignInForm;


