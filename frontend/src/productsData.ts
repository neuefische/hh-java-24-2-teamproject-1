import axios from 'axios';

export interface Product {
    id: string;
    name: string;
    stock: number;
    price: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get('http://localhost:8080/api/products');
    return response.data;
};
