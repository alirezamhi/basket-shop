import React , { createContext, useReducer } from 'react';


const initialState={
    selecedItems : [],
    itemCounter : 0,
    total : 0,
    checkout : false 
}

const cartReducer = (state,action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selecedItems.find(item => item.id === action.payload.id)){
                state.selecedItems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state,
                selecedItems : [...state.selecedItems]
            }
        case "REMOVE_ITEM":
            const newstate = state.selecedItems.filter(item=>item.id !== action.payload.id)
            return {
                ...state,
                selecedItems : [...newstate]
            }
        case "INCREASE":
            const indexI = state.selecedItems.findIndex(item => item.id === action.payload.id);
            state.selecedItems[indexI].quantity++;
            return {
                ...state
            }
        case "DECREASE":
            const indexD = state.selecedItems.findIndex(item => item.id === action.payload.id);
            state.selecedItems[indexD].quantity--;
            return {
                ...state
            }
        case "CHECKOUT":
            return{
                selecedItems : [],
                itemCounter : 0,
                total : 0,
                checkout : true 
            }
        case "CLEARE":
            return{
                selecedItems : [],
                itemCounter : 0,
                total : 0,
                checkout : false   
            }
        default:
            return state;
    }
}

export const cardcontext = createContext();

const Cardcontextprovider = ({children}) => {
    const[state , dispatch] = useReducer(cartReducer,initialState);
    return (
        <div>
            <cardcontext.Provider value={{state,dispatch}}>
                {children}
            </cardcontext.Provider>
        </div>
    );
};

export default Cardcontextprovider;