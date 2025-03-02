import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import ProductPage from "../Pages/ProductPage/productPage";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
    );
}

export default CustomRoutes;
