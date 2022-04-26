import React ,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { cardcontext } from '../../context/Cardcontextprovider';
import shop from "../../icon/shop.svg"
import Style from "../shared/Navigate.module.css";
const Navigate = () => {
    const {state} = useContext(cardcontext);
    return (
        <>
            <div className={Style.container}>
                <div className={Style.maincontainer}>
                    <Link to="/products"className={Style.productlink}>Products</Link>
                    <div className={Style.iconcontainer}>
                        <Link to="/basket"><img src={shop}/></Link>
                        <span>{state.itemsCounter}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigate;