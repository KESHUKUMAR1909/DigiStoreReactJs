import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage"
import ProductPage from "../Pages/ProductPage/ProductPage";
import LoginPage from "../Pages/LoginSignUpPage/LoginPage";
import SignUpPage from "../Pages/LoginSignUpPage/SignUpPage";
import UserDetail from "../Pages/UserDetailsPage/UserDetail";
import CartPage from "../Pages/CartPage/CartPage";
// import CheckoutPage from "../Pages/checkOutPage/CheckOutPage";

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/userDetails" element={<UserDetail />} />
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        </Routes>
    );
}

export default CustomRoutes;
