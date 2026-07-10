import React from 'react';
const TransactionList=()=>{
    return(
   <div className="list-container">
    <h3>History</h3>
    <ul className="list">
        <li className="plus">
            <span>Salary</span>
            <span> 50,000 LKR</span>
            <button className="delete-btn">X</button>
        </li>
   <li className="minus">
          <span>Buy Shoes</span>
          <span>-4,500 LKR</span>
          <button className="delete-btn"> x </button>
        </li>
      </ul>
    </div>
  );
};

export default TransactionList;