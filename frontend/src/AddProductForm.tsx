import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddProductForm.css';
import {fetchProducts, NewProduct} from "./productsData.ts";

const AddProductForm: React.FC = () => {
    const [product, setProduct] = useState<NewProduct>({ name: '', stock: 0, price: 0.0 });

    useEffect(() => {
        fetchProducts();
    }, []);

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
            const response = await axios.post('/api/products', product);
            alert(`Product ${response.data.name} added successfully`);
            setProduct({ name: '', stock: 0, price: 0.0 });
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (

        <div>
            <center>
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={product.name} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Stock:
                            <input type="text" name="stock" value={product.stock} onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Price:
                            <input type="text" name="price" value={product.price} onChange={handleChange}/>
                        </label>
                    </div>
                    <button type="submit">Add Product</button>
                </form>
                </center>
        </div>

);
};

export default AddProductForm;
