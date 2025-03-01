import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import "./Navbar.css"
import logo from "../../assets/logo.png"; 
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to={"/"}> 
                    <img src={logo} alt="Logo" />
                    <p>DigiStore</p>
                </Link>
               
            </div>
            <div className="SearchBar">
                <SearchBar />
            </div>
            <div className="buttons">
                <Button 
                    onClick={() => console.log("ButtonClickedLoginSignUp")} 
                    bgColor={"pink"}
                    text="Login" 
                    padding="4px" 
                    width="100px" 
                    height="40px" 
                    borderRadius="10px"
                />
                <Button 
                    onClick={() => console.log("ButtonClickedCart")} 
                    bgColor={"pink"}
                    text="Cart" 
                    padding="4px" 
                    width="100px" 
                    height="40px" 
                    borderRadius="10px"
                />
            </div>
        </div>
    );
}

export default Navbar;
