const loginUser = (email, password, setIsLogin) => {
    const users = JSON.parse(localStorage.getItem("users")) || {}; // Get users object

    if (!users[email]) {
        alert("User not found! Please sign up first.");
        return false;
    }

    if (users[email] === password) {
        localStorage.setItem("loggedInUser", email); // Store logged-in user
        setIsLogin(true);
        return true; // Login successful
    }

    alert("Incorrect password! Please try again.");
    return false; // Login failed
};

export default loginUser;
    