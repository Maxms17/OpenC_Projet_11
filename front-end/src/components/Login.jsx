
import React from 'react';

function Login() {
  return (
    <main className="Connexion">
      <h1>log In</h1>
      <form>
        <div className="formulaire">
           <label htmlFor="username">Username</label>
           <input type="text" id="username" />
        </div>
        <div className="formulaire">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </main>
  );
}

export default Login;
