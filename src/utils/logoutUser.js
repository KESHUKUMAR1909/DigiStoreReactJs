const logoutUser = (setIsLogin) => {
    localStorage.removeItem("loggedInUser");
    setIsLogin(false);
    console.log("User logged out.");
};
export default logoutUser;
