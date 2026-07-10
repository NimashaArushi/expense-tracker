import React,{Children, createContext,useSate}from 'react';

const initialState={
    transactions:[
    {id:1,text:'salary',amount:5000,type:'income'},
    {id:2,text:'Buy Shoes',amount:4500,type:'expense'},
    ]
};

export const GlobalContext=createContext(initialState);
export const GlobalProvider=({childern})=>{
    const[state,setState]=useState(initialState);
    return(
        <GlobalContext.Provider value={{transactions:state.transactions}}>
            {Children}
        </GlobalContext.Provider>
    );
};