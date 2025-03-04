import { BrowserRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import productContext from './config/productDetails';
import isLoginContext from './config/isLogin';
import Footer from "./Components/Footer/Footer"
import CustomRoutes from './Routes/customRoutes';

function App() {
  const [productDetails, setProductDetails] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    if (storedLoginStatus === "true") {
      setIsLogin(true);
    }

    // Clear login state when the user closes or reloads the app
    const handleUnload = () => {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("loggedInUser")
      setIsLogin(false);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <BrowserRouter>
      <productContext.Provider value={{ productDetails, setProductDetails }}>
        <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
          <Navbar />
          <CustomRoutes />
          <Footer />
        </isLoginContext.Provider>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
