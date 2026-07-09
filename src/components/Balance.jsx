import React from 'react';
const Balance=()=>{
    return(
        <div className="balance-container">
            <div className="balance-main">
                <h4>Your Balance</h4>
                <h1>0.00LKR</h1>
</div>

<div className="income-expense-container">
    <div className="box income">
        <h4>Income</h4>
        <p className="money plus">+0.00LKR</p>
    </div>
    <div className="box expense">
        <h4>Expense</h4>
        <p className="money minus">-0.00LKR</p>
    </div>
</div>
        </div>
    );
};export default Balance;