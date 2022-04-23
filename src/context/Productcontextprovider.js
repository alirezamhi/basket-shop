import React , { useEffect , useState , createContext } from 'react';
import { GetProducts } from '../service/Getproducts';

export const Productcontext = createContext();

const Productcontextprovider = (props) => {

    const [products , setProducts] = useState([]);

    useEffect( ()=>{
        const fetchApi = async () => {
            setProducts(await GetProducts()); 
        }
        fetchApi();
    },[]);

    return (
        <div>
            <Productcontext.Provider value = {products}>
                {props.children}
            </Productcontext.Provider>
        </div>
    );
};

export default Productcontextprovider;