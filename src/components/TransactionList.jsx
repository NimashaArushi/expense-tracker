import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext); //transact and delete funtion
    const [searchTerm, setSearchTerm] = useState('');   //search term state

    
    const filteredTransactions = transactions.filter(transaction =>
      transaction.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="list-container">
            <h3>History</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder="search Transaction.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <ul className="list">
              
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map(transaction => (
                        <li key={transaction.id} className={transaction.type === 'income' ? 'plus' : 'minus'}>
                            <span>{transaction.text}</span>
                            <span>
                                {transaction.type === 'income' ? '+' : '-'}
                                {transaction.amount.toLocaleString()} LKR
                            </span>
                            <button 
                                onClick={() => deleteTransaction(transaction.id)} 
                                className="delete-btn"
                            >
                                x
                            </button>
                        </li>
                    ))
                ) : (
                    <li className="no-result">No transactions found</li>
                )}
            </ul>
        </div>
    );
};

export default TransactionList;