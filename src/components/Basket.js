import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cardcontext } from '../context/Cardcontextprovider';
import Cardbasket from './shared/Cardbasket';
const Basket = () => {
    const {state,dispatch} = useContext(cardcontext);
    return (
        <div>
            {state.selecedItems.map(item=><Cardbasket key={item.id} data={item}/>)}
            {
                state.itemsCounter > 0 && <div>
                    <p><span>Total Item:</span>{state.itemCounter}</p>
                    <p><span>Total payment:</span>{state.total}</p>
                    <div>
                        <button onClick={()=>dispatch({type:"CHECKOUT"})}>CHECKOUT</button>
                        <button onClick={()=>dispatch({type:"CLEARE"})}>CLEARE</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>checkout successfuly</h3>
                    <Link to="/products">Buy more</Link>
                </div>

            }
            {
                !state.checkout && state.itemsCounter===0 && <div>
                    <h3>Do you want buy more ?</h3>
                    <Link to="/products">Go back to shop</Link>
                </div>
            }
        </div>
    );
};

export default Basket;