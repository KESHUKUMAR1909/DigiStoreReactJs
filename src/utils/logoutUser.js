const logoutUser = (setIsLogin) => {
    localStorage.removeItem("profileImage"); // Clear profile image
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLogin");
    setIsLogin(false);
    
};
export default logoutUser;
