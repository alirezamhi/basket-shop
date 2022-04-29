import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { cardcontext } from '../context/Cardcontextprovider';
import Cardbasket from './shared/Cardbasket';
import style from '../components/Basket.module.css';
const Basket = () => {
    const {state,dispatch} = useContext(cardcontext);
    return (
        <div className={style.container}>
            <div className={style.card}>
                {state.selecedItems.map(item=><Cardbasket key={item.id} data={item} className={style.card}/>)}
            </div>
            <div>
                {
                    state.itemsCounter > 0 && 
                    <div className={style.totalcard}>
                        <p className={style.ptag}><span>Total Item:</span> {state.itemsCounter}</p>
                        <p className={style.ptag}><span>Total payment:</span> {state.total}</p>
                        <div className={style.buttontag}>
                            <button onClick={()=>dispatch({type:"CHECKOUT"})}>CHECKOUT</button>
                            <button onClick={()=>dispatch({type:"CLEARE"})}>CLEARE</button>
                        </div>
                    </div>
                }
                {
                    state.checkout && 
                    <div className={style.checkout}>
                        <h3>checkout successfuly</h3>
                        <Link to="/products">Buy more</Link>
                    </div>

                }
                {
                    !state.checkout && state.itemsCounter===0 && 
                    <div className={style.checkout}>
                        <h3>Do you want buy more ?</h3>
                        <Link to="/products">Go back to shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Basket;