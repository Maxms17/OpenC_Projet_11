import React from 'react';
import jsonData from '../data.json';
import '../css/main.css';

function Dropdown({ id }) {

  const transactionObject = jsonData.transactions.find(transaction => {
    console.log("Transaction ID:", id);
    console.log("Transaction data:", transaction);
    return transaction.data.some(dataItem => dataItem.id === id);
  });

  if (!transactionObject) {
    return <div>Aucune transaction trouvée avec cet ID.</div>;
  }

  const transactionsData = transactionObject.data;

  return (
    <div>
      <div className='transact_info'>
        <div className='date'>
          <p>Date</p>
        </div>
        <div className='description'>
          <p>Description</p>
        </div>
        <div className='amount'>
          <p>Amount</p>
        </div>
        <div className='balance'>
          <p>Balance</p>
        </div>
      </div>

      {transactionsData.map((transaction, index) => (
        <div className='transact_info' key={index}>
          <div className='date'>
            <p>{transaction.date}</p>
          </div>
          <div className='description'>
            <p>{transaction.description}</p>
          </div>
          <div className='amount'>
            <p>{transaction.amount}</p>
          </div>
          <div className='balance'>
            <p>{transaction.balance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dropdown;
