import React , {useContext} from 'react';
import {shorten} from '../helper/functionshorten';
import { cardcontext } from '../../context/Cardcontextprovider';
import trash from '../../icon/trash.svg';
import style from '../shared/Cardbasket.module.css';

const Cardbasket = (props) => {
    const { title, price , image , quantity } =props.data;
    const { dispatch } = useContext(cardcontext);
    return (
        <div className={style.container}>
            <img className={style.image} src={image}/>
            <div className={style.textcontainer}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div className={style.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={style.buttoncontainer}>
                {
                    quantity>1?
                    <button onClick={()=>dispatch({type:"DECREASE",payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:props.data})}><img src={trash}/></button>
                }
                <button  onClick={()=>dispatch({type:"INCREASE",payload:props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cardbasket;