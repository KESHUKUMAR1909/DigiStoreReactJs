import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import isLoginContext from "../../config/isLogin";
import getUserName from "../../utils/getUserName";

function Navbar() {
    const { isLogin, setIsLogin } = useContext(isLoginContext);
    const navigate = useNavigate();

    const handleAuth = () => {
        if (isLogin) {
            navigate("/login"); 
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" />
                    <p>DigiStore</p>
                </Link>
            </div>
            <div className="SearchBar">
                <SearchBar type="text" placeholder="Enter Your Search Here" />
            </div>
            <div className="buttons">
                <Button
                    onClick={handleAuth}
                    bgColor="pink"
                    text={isLogin ? `(${getUserName()})` : "Login"}
                    padding="4px"
                    width="150px"
                    height="40px"
                    borderRadius="10px"
                />
                <Button
                    onClick={() => console.log("ButtonClickedCart")}
                    bgColor="pink"
                    text={<>
                        Cart <GiShoppingCart />
                    </>}
                    padding="2px"
                    width="110px"
                    height="40px"
                    borderRadius="10px"
                />
            </div>
        </div>
    );
}

export default Navbar;
