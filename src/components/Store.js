import React , { useContext } from 'react';
import {Productcontext} from '../context/Productcontextprovider';
import Card from './shared/Card';
import Style from '../components/Store.module.css';

const Store = () => {
    const products = useContext(Productcontext);
    return (
        <div className={Style.container}>
            {
                products.map(item => <Card key={item.id} productdata={item}/>)
            }
        </div>
    );
};

export default Store;