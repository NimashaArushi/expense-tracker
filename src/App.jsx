import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Balance />
    </div>
  );
}

export default App;