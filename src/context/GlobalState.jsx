import React,{Children, createContext,useState, useEffect}from 'react';

const initialState={
    transactions: JSON.parse(localStorage.getItem('transactions')) || [
    {id:1,text:'salary',amount:5000,type:'income'},
    {id:2,text:'Buy Shoes',amount:4500,type:'expense'},
    ]
};

export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{
    const[state,setState]=useState(initialState);
    
useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

const addTransaction=(newTransaction)=>{
    setState({
        ...state,
        transactions:[newTransaction,...state.transactions]
    });

};

const resetTransactions=()=>{
    setState({
        ...state,
        transactions:[]
    });
};

const deleteTransaction = (id) => {
        setState({
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== id)
        });
    };
    return(
        <GlobalContext.Provider value={{transactions:state.transactions, addTransaction,deleteTransaction,resetTransactions}}>
            {children}
        </GlobalContext.Provider>
    );
};