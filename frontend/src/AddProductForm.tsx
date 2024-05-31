import React, { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css';

const AddProductForm: React.FC = () => {
    const [name, setName] = useState('');
    const [stock, setStock] = useState<number>(0);
    const [price, setPrice] = useState<number>(0.0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/products', {
                name,
                stock,
                price
            });
            console.log(response.data);
            // Setze die Eingabefelder zurück
            setName('');
            setStock(0);
            setPrice(0.0);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-product-form">
            <div>
                <label>Product Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;
