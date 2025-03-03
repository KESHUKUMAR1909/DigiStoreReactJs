import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import ProductPage from "../Pages/ProductPage/productPage";
import LoginPage from "../Pages/LoginSignUpPage/LoginPage";
import SignUpPage from "../Pages/LoginSignUpPage/SignUpPage";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
        </Routes>
    );
}

export default CustomRoutes;
