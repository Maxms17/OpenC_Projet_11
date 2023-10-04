import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../actions/userActions';
import Account from './Account';
import '../css/main.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const token = useSelector((state) => state.auth.token);

  //console.log("token",token);

  const [newUsername, setNewUsername] = useState(userName);
  const [isEditing, setIsEditing] = useState(false);

  const handleUsernameChange = () => {
    setIsEditing(true);
  };

  const handleSaveUsername = async () => {
    console.log("first",firstName);
    console.log("last",lastName);
    console.log("token",token.payload.token);

    try {
      const nameResponse = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token.payload.token}`,
        },
        body: JSON.stringify({
          'userName': newUsername, 
        }),
      });

      if (nameResponse.ok) {
        const utilisateurData = await nameResponse.json();

        dispatch(setUser({
          email: utilisateurData.body.email,
          userName: utilisateurData.body.userName,
          firstName: utilisateurData.body.firstName,
          lastName: utilisateurData.body.lastName,
        }));
      } else {
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur. Statut de la réponse:', nameResponse.status);
      }
    } catch (error) {
      console.error('Erreur de donnée', error);
    }

    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back<br />
          {isEditing ? (
            <>
              <input type="text" readOnly value={lastName} /><br />
              <input type="text" readOnly value={firstName} /><br />
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)} 
              /><br />
              <button className="save-button" onClick={handleSaveUsername}>Save</button>
            </>
          ) : (
            <>
              {userName}<br />
              <button className="edit-button" onClick={handleUsernameChange}>Edit Name</button>
            </>
          )}
        </h1>
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
