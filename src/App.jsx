import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import productContext from './config/productDetails';
import isLoginContext from './config/isLogin';
import Footer from "./Components/Footer/Footer"
import CustomRoutes from './Routes/customRoutes';
import quantityContext from './config/quantity';
import CartContext from './config/CartContext.js';

function App() {
  const [productDetails, setProductDetails] = useState([]);
  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true"; // Persist login state
  });

  const [quantity, setQuantity] = useState({});
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Store cart in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <productContext.Provider value={{ productDetails, setProductDetails }}>
        <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
          <quantityContext.Provider value={{ quantity, setQuantity }}>
            <CartContext.Provider value={{ cart, setCart }}>  
              <Navbar />
              <CustomRoutes />
              <Footer />
            </CartContext.Provider>
          </quantityContext.Provider>
        </isLoginContext.Provider>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
