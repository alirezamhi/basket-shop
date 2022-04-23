import axios from "axios";


const GetProducts = async () => {
    const Respons = await axios.get("https://fakestoreapi.com/products");
    return Respons.data;
}
export {GetProducts};