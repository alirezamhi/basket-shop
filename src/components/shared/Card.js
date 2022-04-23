import React from 'react';
import { shorten } from '../helper/functionshorten';
import { Link } from 'react-router-dom';

const Card = ({productdata}) => {
    return (
        <div>
           <img src={productdata.image}/>
           <h3>{shorten(productdata.title)}</h3>
           <p>{productdata.price}</p>
           <div>
               <Link to={`/products/${productdata.id}`}>Details</Link>
               <div>
                   <button>add</button>
               </div>
           </div>
        </div>
    );
};

export default Card;