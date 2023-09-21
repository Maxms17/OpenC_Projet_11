// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated }) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/logout">Déconnexion</Link> {/* Ajoutez une route de déconnexion si nécessaire */}
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Connexion</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
