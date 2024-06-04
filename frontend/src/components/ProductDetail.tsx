import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Product} from "../productsData.ts";


export default function ProductDetail() {
    const params = useParams()
    const id = params.id


    const [product, setProduct] = useState<Product>()

    function getProduct() {
        axios.get(`/api/products/${id}`)
            .then(response => {
                setProduct(response.data)
                console.log('Product fetched')
                console.log(response.data)
            })
            .catch(error => {
                console.error(error)
                console.log('Failed to fetch product')
            })
    }

    useEffect(() => {
        getProduct();
    }, []);


    return (
            <section className="container">
                <h3>Product Detail</h3>
                <p>Name: <span className="product-info"> {product?.name}</span></p>
                <p>Price: <span className="product-info">{product?.price}</span></p>
                <p>Stock: <span className="product-info">{product?.stock}</span></p>

            </section>
    );
}

