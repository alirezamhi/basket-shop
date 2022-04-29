import React , {useContext} from 'react';
import { Productcontext } from '../context/Productcontextprovider';
import { Link } from 'react-router-dom';
import style from '../components/Productdetail.module.css';

const Productdetail = (props) => {
    const products = useContext(Productcontext);
    const id = props.match.params.id;
    const product = products[id-1];
    const {title , price , description , category ,image}=product; 
    
    return (
        <div className={style.container}>
            <img src={image} className={style.image}/>
            <div className={style.textcontainer}>
                <h3>{title}</h3>
                <p className={style.description}>{description}</p>
                <p className={style.category}><span>Category: </span>{category}</p>
                <div className={style.buttoncontainer}>
                    <span className={style.price}>{price}$</span>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Productdetail;