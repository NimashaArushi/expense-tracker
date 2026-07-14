import React,{useContext} from 'react';
import{GlobalContext}from'../context/GlobalState';

const Balance=()=>{
  const{transactions}=useContext(GlobalContext);
  const amounts=transactions.map(transaction=> transaction.type==='income' ?
     transaction.amount : -transaction.amount);

     const total=amounts.reduce((acc,item)=>(acc += item),0);
     
     const income=transactions.filter(transaction=>transaction.type==='income')
     .reduce((acc,item)=>(acc+=item.amount),0);

     const expense = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((acc, item) => (acc += item.amount), 0);

    return(
        <div className="balance-container">
            <div className="balance-main">
                <h4>Your Balance</h4>
                <h1>{total.toLocaleString()}.00 LKR</h1>
</div>

<div className="income-expense-container">
    <div className="box income">
        <h4>Income</h4>
       <p className="money plus">+{income.toLocaleString()}.00 LKR</p>
    </div>
    <div className="box expense">
        <h4>Expense</h4>
        <p className="money minus">-{expense.toLocaleString()}.00 LKR</p>
    </div>
</div>
        </div>
    );
};export default Balance;