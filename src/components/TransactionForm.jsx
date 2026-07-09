import React from 'react';

const TransactionForm = () => {
  return (
    <div className="form-container">
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
         
          <label htmlFor="text">Description </label>
          <input type="text" placeholder="Enter description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <div className="form-control">
          <label htmlFor="type">Type </label>
          <select>
            <option value="income">Income (+)</option>
            <option value="expense">Expense (-)</option>
          </select>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;