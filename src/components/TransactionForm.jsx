import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

  const TransactionForm = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit=(e)=>{
    e.preventDefault();
  
  if(text.trim()==='' || amount.trim()===''){
    alert('plz Enter the descritions and amount !!!');
    return;
  }

  const newTransaction={
    id:Math.floor(Math.random()*10000000),
    text:text,
    amount:+amount,
    type:type
  
  }


  addTransaction(newTransaction);
  setText('');
    setAmount('');
  };
  return (
    <div className="form-container">
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
         <label htmlFor="text">Description </label>
          <input
          type="text"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Enter description..."/>
</div>


        <div className="form-control">
          <label htmlFor="amount">Amount </label>
      <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
        </div>


        <div className="form-control">
          <label htmlFor="type">Type </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income (ආදායම)</option>
            <option value="expense">Expense (වියදම)</option>
          </select>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;