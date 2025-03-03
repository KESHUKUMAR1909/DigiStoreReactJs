import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./LoginSignUpPage.css";
import createUser from "../../utils/createUser.js";
import checkDetailsValidity from "../../utils/checkDetailsValidity.js";
import isLoginContext from "../../config/isLogin.js";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const [isValidDetails, setIsValidDetails] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    
    const { isLogin, setIsLogin } = useContext(isLoginContext);
    const navigate = useNavigate();


    useEffect(() => {
        if (isValidDetails) {
            const handleUserCreation = async () => {
                setIsLoading(true);
                const success = await createUser(email, password, setIsLogin);
                setIsLoading(false);

                if (!success) {
                    setError("Signup failed. Please try again.");
                }
            };
            handleUserCreation();
        }
    }, [isValidDetails]);

    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin]);

    const handleSignUp = () => {
        setError(""); // Reset previous errors
        checkDetailsValidity(email, password, confirmPassword, setIsValidDetails);
    };

    return (
        <div className="login-signupPage">
            <h1>SignUp Now</h1>
            <div className="btns-login-sign-up">
                <Link to="/login">
                    <Button text="Login" width="50%" padding="10px" borderRadius="40px" bgColor="pink" />
                </Link>
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

            <SearchBar 
                type={isHidden ? "password" : "text"} 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />

            {error && <p style={{ color: "red" }}>{error}</p>} 

            <Button 
              text={isLoading ? "Signing Up..." : "SignUp"} 
              width="100%" 
              padding="10px" 
              onClick={handleSignUp} 
              borderRadius="40px" 
              bgColor="#b4e6b4" 
              disabled={isLoading || !email || !password || !confirmPassword} 
            />
        </div>
    );
}

export default SignUpPage;
