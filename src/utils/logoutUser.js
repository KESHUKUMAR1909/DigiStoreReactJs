const logoutUser = (setIsLogin) => {
    localStorage.removeItem("profileImage"); // Clear profile image
    localStorage.removeItem("loggedInUser");
    setIsLogin(false);
    
};
export default logoutUser;
