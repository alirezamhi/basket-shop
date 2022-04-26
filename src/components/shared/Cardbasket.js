import React , {useContext} from 'react';
import {shorten} from '../helper/functionshorten';
import { cardcontext } from '../../context/Cardcontextprovider';
import trash from '../../icon/trash.svg';

const Cardbasket = (props) => {
    const { title, price , image , quantity } =props.data;
    const {dispatch}=useContext(cardcontext);
    return (
        <div>
            <img src={image}/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity>1?
                    <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trash}/></button>
                }
                <button onClick={()=>dispatch({type:"ADD_ITEM",payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cardbasket;