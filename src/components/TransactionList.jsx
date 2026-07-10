import React,{useContext}from 'react';
import {GlobalContext}from'../context/GlobalState';


const TransactionList=()=>{
    const{transactions}=useContext(GlobalContext);
    return(
        <div className="list-container">
            <h3>History</h3>
             <ul className="list">
                {transactions.map(transaction=>(
                   <li key={transaction.id} className={transaction.type === 'income' ? 'plus' : 'minus'}>
            <span>{transaction.text}</span>
            <span>
              {transaction.type === 'income' ? '+' : '-'}
              {transaction.amount.toLocaleString()} LKR
            </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;