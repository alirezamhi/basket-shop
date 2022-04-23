import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { cardcontext } from '../../context/Cardcontextprovider';
import shop from "../../icon/shop.svg"
const Navigate = () => {
    const {state} = useContext(cardcontext);
    return (
        <>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <img src={shop}/>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </>
    );
};

export default Navigate;