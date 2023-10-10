import React, { useState } from 'react';
import '../css/main.css';
import Dropdown from './Dropdown';

const Account = ({ id, title, amount, amountDescription }) => {
  const [showTransactions, setShowTransactions] = useState(false);

  const handleChange = () => {
    setShowTransactions(!showTransactions);
  };

  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{amountDescription}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" onClick={handleChange}>View transactions</button>
        </div>
      </section>
      <section className="transact">
        {showTransactions && <Dropdown id={id} />} 
      </section>
    </div>

  );
};

export default Account;
