import { BrowserRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import productContext from './config/productDetails';
import isLoginContext from './config/isLogin';
import CustomRoutes from './Routes/customRoutes';

function App() {
  const [productDetails, setProductDetails] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLogin");
    if (storedLoginStatus === "true") {
      setIsLogin(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <productContext.Provider value={{ productDetails, setProductDetails }}>
        <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
          <Navbar />
          <CustomRoutes />
        </isLoginContext.Provider>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
