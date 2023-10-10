import React, { useState } from 'react';
import jsonData from '../data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import '../css/main.css';

function Dropdown({ id }) {
  const targetTransaction = jsonData.transactions.find(
    transaction => transaction.id === id
  );

  const [showDetails, setShowDetails] = useState([]);

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

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
        <div className='fleche'>
          
        </div>
      </div>

      {targetTransaction ? (
        targetTransaction.data.map((transactionData, index) => (
          <div className='transact_info' key={index}>
            <div className='date'>
              <p>{transactionData.date}</p>
            </div>
            <div className='description'>
              <p>{transactionData.description}</p>
            </div>
            <div className='amount'>
              <p>{transactionData.amount}</p>
            </div>
            <div className='balance'>
              <p>{transactionData.balance}</p>
            </div>
            <div className='fleche' onClick={() => toggleDetails(index)}>
              <FontAwesomeIcon icon={showDetails[index] ? faChevronUp : faChevronDown} />
            </div>
          </div>
        ))
      ) : (
        <p>La transaction avec l'ID {id} n'a pas été trouvée.</p>
      )}
    </div>
  );
}

export default Dropdown;
