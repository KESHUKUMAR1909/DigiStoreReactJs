import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import ProductPage from "../Pages/ProductPage/productPage";
import LoginPage from "../Pages/LoginSignUpPage/LoginPage";
import SignUpPage from "../Pages/LoginSignUpPage/SignUpPage";
import UserDetail from "../Pages/UserDetailsPage/UserDetail";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/userDetails" element={<UserDetail />} />
        </Routes>
    );
}

export default CustomRoutes;
