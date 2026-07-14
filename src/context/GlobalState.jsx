import React,{Children, createContext,useState}from 'react';

const initialState={
    transactions:[
    {id:1,text:'salary',amount:5000,type:'income'},
    {id:2,text:'Buy Shoes',amount:4500,type:'expense'},
    ]
};

export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children})=>{
    const[state,setState]=useState(initialState);

const addTransaction=(newTransaction)=>{
    setState({
        ...state,
        transactions:[newTransaction,...state.transactions]
    });

};

const deleteTransaction = (id) => {
        setState({
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id !== id)
        });
    };
    return(
        <GlobalContext.Provider value={{transactions:state.transactions, addTransaction,deleteTransaction}}>
            {children}
        </GlobalContext.Provider>
    );
};