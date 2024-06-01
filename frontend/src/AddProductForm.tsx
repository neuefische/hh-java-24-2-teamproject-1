import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProductForm.css';

interface Product {
    id?: string;
    name: string;
    stock: number;
    price: number;
}

const AddProductForm: React.FC = () => {
    const [product, setProduct] = useState<Product>({ name: '', stock: 0, price: 0.0 });
    const [products, setProducts] = useState<Product[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/products', product);
            fetchProducts();
            alert('Product added successfully');
            setProduct({ name: '', stock: 0, price: 0.0 }); // Reset form
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={product.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Stock:
                        <input type="text" name="stock" value={product.stock} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Price:
                        <input type="text" name="price" value={product.price} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProductForm;
