import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import userImage from "../../assets/userImage.png";
import Button from "../../Components/Button/Button";
import getCompleteUserName from "../../utils/getCompleteUserName.js";
import logoutUser from "../../utils/logoutUser.js";
import getUserEmail from "../../utils/getUserEmail.js";
import deleteAccount from "../../utils/deleteAccount.js"
import "./UserDetails.css";
import isLoginContext from "../../config/isLogin.js";

function UserDetail() {
    const navigate = useNavigate(); // Hook for navigation
    const [imageSrc, setImageSrc] = useState(localStorage.getItem("profileImage") || userImage);
    const [isUpload, setIsUpload] = useState(false);
    const {isLogin , setIsLogin} = useContext(isLoginContext)

    useEffect(() => {
        const storedImage = localStorage.getItem("profileImage");
        if (storedImage) {
            setImageSrc(storedImage);
        }
    }, [isLogin]);

    const uploadPhoto = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setImageSrc(base64Image);
                localStorage.setItem("profileImage", base64Image);
                setIsUpload(true);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogout = () => {
        logoutUser(setIsLogin);
        navigate("/login" , { replace: true });
    };

    return (
        <div className="user-main-page">
            <div className="profilePhotoArea">
                <img src={imageSrc} alt="UserImage" />
                <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: "none" }} 
                    id="fileInput" 
                    onChange={uploadPhoto} 
                />
                <Button 
                    text={isUpload ? "Change" : "Upload"} 
                    width="50%" 
                    padding="10px" 
                    borderRadius="40px" 
                    bgColor="whiteSmoke" 
                    onClick={() => document.getElementById("fileInput").click()} 
                />
            </div>
            <div className="userDetails">
                <h1>User Name</h1>
                <h1>{isLogin?getCompleteUserName():"*********"}</h1>
                <h1>User Email</h1>
                <h1>{isLogin?getUserEmail():"*********"}</h1>
                <Button 
                    text="Logout" 
                    width="90%" 
                    padding="20px" 
                    borderRadius="20px" 
                    bgColor="orange" 
                    onClick={handleLogout} 
                />
                 <Button 
                    text={isLogin?"DeleteMyAccount":"Signup"}
                    width="90%" 
                    padding="20px" 
                    borderRadius="20px" 
                    bgColor="orange" 
                    onClick={isLogin?()=>deleteAccount(getUserEmail(), setIsLogin):navigate("/signup")} 
                />
            </div>
        </div>
    );
}

export default UserDetail;
