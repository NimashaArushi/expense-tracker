import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="app-container">
        <Header />
        <Balance />
        <TransactionForm />
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;