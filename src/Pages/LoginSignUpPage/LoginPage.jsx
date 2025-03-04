import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import isLoginContext from "../../config/isLogin";
import Button from "../../Components/Button/Button";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./LoginSignUpPage.css";
import loginUser from "../../utils/loginUser";
import UserDetail from "../UserDetailsPage/UserDetail";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const [error, setError] = useState("");
    const { isLogin, setIsLogin } = useContext(isLoginContext);  // Destructure isLogin
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");  // Reset previous errors
        const success = await loginUser(email, password, setIsLogin);  // Await login

        if (success) {
            navigate("/" , { replace: true });  // Redirect on successful login
        } else {
            setError("Invalid email or password");  // Show error message
        }
    };

    return isLogin ? (
        <UserDetail />
    ) : (
        <div className="login-signupPage">
            <h1>Login Now</h1>
            <div className="btns-login-sign-up">
                <Button text="Login" width="50%" padding="10px" borderRadius="40px" bgColor="pink" />
                <Link to="/signup">
                    <Button text="SignUp" width="50%" padding="10px" borderRadius="40px" bgColor="whiteSmoke" />
                </Link>
            </div>

            <SearchBar 
                type="email" 
                placeholder="Enter Your Email Here" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />

            <div className="password-section">
                <SearchBar 
                    type={isHidden ? "password" : "text"} 
                    placeholder="Enter Your Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Button 
                    text={isHidden ? "Show" : "Hide"} 
                    width="23%" 
                    padding="10px" 
                    onClick={() => setIsHidden(!isHidden)} 
                    borderRadius="40px" 
                    bgColor="pink" 
                />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}  {/* Show error if any */}

            <h3>New User? <Link to="/signup">Signup</Link></h3>

            <Button 
                text="Login" 
                width="100%" 
                padding="10px" 
                onClick={handleLogin} 
                borderRadius="40px" 
                bgColor="#b4e6b4" 
                disabled={!email || !password}  // Disable if inputs are empty
            />
        </div>
    );
}

export default LoginPage;
