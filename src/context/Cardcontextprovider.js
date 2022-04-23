import React , { createContext, useReducer } from 'react';


const initialState={
    selecedItems : [],
    itemCounter : 0,
    total : 0,
    checkout : false 
}
const sumItem = (item) => {
    const itemCounter = item.reduce((total,product)=>total+product.quantity,0);
    const total = item.reduce((total,product)=>total+product.quantity * product.price,0);
    return {itemCounter,total};
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
                selecedItems : [...state.selecedItems],
                ...sumItem(state.selecedItems)
            }
        case "REMOVE_ITEM":
            const newstate = state.selecedItems.filter(item=>item.id !== action.payload.id)
            return {
                ...state,
                selecedItems : [...newstate],
                ...sumItem(state.selecedItems)
            }
        case "INCREASE":
            const indexI = state.selecedItems.findIndex(item => item.id === action.payload.id);
            state.selecedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItem(state.selecedItems)
            }
        case "DECREASE":
            const indexD = state.selecedItems.findIndex(item => item.id === action.payload.id);
            state.selecedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItem(state.selecedItems)
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