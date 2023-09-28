import React from 'react';
import { useState, useEffect } from 'react';

import Account from './Account';

import '../css/main.css';

const Dashboard = () => {
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
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        amountDescription="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        amountDescription="Current Balance"
      />
    </main>
  );
};

export default Dashboard;
