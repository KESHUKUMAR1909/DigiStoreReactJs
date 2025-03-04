import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./LoginSignUpPage.css";
import createUser from "../../utils/createUser.js";
import checkDetailsValidity from "../../utils/checkDetailsValidity.js";
import isLoginContext from "../../config/isLogin.js";
import UserDetail from "../UserDetailsPage/UserDetail.jsx";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);
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
                setIsValidDetails(false); // Prevent re-triggering
            };
            handleUserCreation();
        }
    }, [isValidDetails]);

    useEffect(() => {
        if (isLogin) {
            navigate("/" , { replace: true });
        }
    }, [isLogin, navigate]);

    const handleSignUp = () => {
        setError(""); // Reset previous errors

        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        checkDetailsValidity(email, password, confirmPassword, setIsValidDetails);
    };

    return isLogin ? <UserDetail /> : (
        <> 
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

                {/* Email Input */}
                <SearchBar 
                    type="email" 
                    placeholder="Enter Your Email Here" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* Password Input */}
                <div className="password-section">
                    <SearchBar
                        type={isPasswordHidden ? "password" : "text"}
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button 
                        text={isPasswordHidden ? "Show" : "Hide"} 
                        width="23%" 
                        padding="10px" 
                        onClick={() => setIsPasswordHidden(!isPasswordHidden)} 
                        borderRadius="40px" 
                        bgColor="pink" 
                    />
                </div>

                {/* Confirm Password */}
                <div className="password-section">
                    <SearchBar 
                        type={isConfirmPasswordHidden ? "password" : "text"} 
                        placeholder="Confirm Password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                    />
                    <Button 
                        text={isConfirmPasswordHidden ? "Show" : "Hide"} 
                        width="23%" 
                        padding="10px" 
                        onClick={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)} 
                        borderRadius="40px" 
                        bgColor="pink" 
                    />
                </div>

                {/* Error Message */}
                {error && <p style={{ color: "red" }}>{error}</p>} 

                {/* Sign Up Button */}
                <Button 
                    text={isLoading ? "Signing Up..." : "SignUp"} 
                    width="100%" 
                    padding="10px" 
                    onClick={handleSignUp} 
                    borderRadius="40px" 
                    bgColor="#b4e6b4" 
                    disabled={isLoading} 
                />
            </div>
        </>
    );
}

export default SignUpPage;
