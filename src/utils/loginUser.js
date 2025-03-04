const loginUser = (email, password, setIsLogin) => {
    const users = JSON.parse(localStorage.getItem("users")) || {}; // Get users object

    if (!users[email]) {
        alert("User not found! Please sign up first.");
        setIsLogin(false);
        return ;
    }

    if (users[email] === password) {
        localStorage.setItem("loggedInUser", email); // Store logged-in user
        localStorage.setItem("isLogin", true); // Persist login state
        setIsLogin(true);
        return true; // Login successful
    }

    return false; // Login failed
};

export default loginUser;
