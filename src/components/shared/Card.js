import React , {useContext} from 'react';
import { isCard, shorten , quantityconter} from '../helper/functionshorten';
import { Link } from 'react-router-dom';
import { cardcontext } from '../../context/Cardcontextprovider';
import trash from '../../icon/trash.svg'

const Card = ({productdata}) => {
    const {state,dispatch}= useContext(cardcontext);
    return (
        <div>
           <img src={productdata.image}/>
           <h3>{shorten(productdata.title)}</h3>
           <p>{productdata.price}</p>
           <div>
               <Link to={`/products/${productdata.id}`}>Details</Link>
               <div>
                   {
                       isCard(state , productdata.id)?
                       <button onClick={()=>dispatch({type:"INCREASE" , payload:productdata})}>+</button>:
                       <button onClick={()=>dispatch({type:"ADD_ITEM" , payload:productdata})}>Add to card</button>
                   }
                   {quantityconter(state , productdata.id) ===1 && <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:productdata})}><img src={trash}/></button>}
                   {quantityconter(state , productdata.id) >1 && <button onClick={()=>dispatch({type:"DECREASE",payload:productdata})}>-</button>}
               </div>
           </div>
        </div>
    );
};

export default Card;