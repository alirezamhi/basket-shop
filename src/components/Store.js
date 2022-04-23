import React , { useContext } from 'react';
import {Productcontext} from '../context/Productcontextprovider';
import Card from './shared/Card';

const Store = () => {
    const products = useContext(Productcontext);
    return (
        <div>
            {
                products.map(item => <Card key={item.id} productdata={item}/>)
            }
        </div>
    );
};

export default Store;