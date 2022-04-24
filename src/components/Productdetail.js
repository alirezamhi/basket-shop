import React , {useContext} from 'react';
import { Productcontext } from '../context/Productcontextprovider';
import { Link } from 'react-router-dom';

const Productdetail = (props) => {
    const products = useContext(Productcontext);
    const id = props.match.params.id;
    const product = products[id-1];
    const {title , price , description , category ,image}=product; 
    
    return (
        <div>
            <img src={image}/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{category}</p>
                <div>
                    <span>{price}$</span>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Productdetail;