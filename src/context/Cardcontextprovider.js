import React , { useReducer } from 'react';


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
    }
}

const Cardcontextprovider = () => {
    const[state , dispatch] = useReducer(cartReducer,initialState);
    return (
        <div>
            
        </div>
    );
};

export default Cardcontextprovider;