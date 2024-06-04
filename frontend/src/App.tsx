import './App.css';
import AddProductForm from "./AddProductForm.tsx";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail.tsx";


function App() {


    return (
        <Routes>
            <Route path="/" element={<AddProductForm/>}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
        </Routes>

    )
}

export default App
