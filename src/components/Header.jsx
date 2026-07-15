import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
  const { resetTransactions } = useContext(GlobalContext);

  return (
    <header className="app-header">
      <h2>💰 Expense Tracker</h2>
      <button className="reset-btn" onClick={resetTransactions}>
        Reset All
      </button>
    </header>
  );
};

export default Header;