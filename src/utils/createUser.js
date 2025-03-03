const createUser = (email, password, setIsLogin) => {
    // Check if another user is already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        return alert(`User ${loggedInUser} is already logged in. Please log out first.`);
    }

    // Retrieve existing users or initialize an empty object
    const users = JSON.parse(localStorage.getItem("users")) || {};
    
    if (users[email]) {
        return alert("User Already Exists! Please Login.");
    }

    // Store new user
    users[email] = password;
    localStorage.setItem("users", JSON.stringify(users));

    // Set the logged-in user
    localStorage.setItem("loggedInUser", email);
    setIsLogin(true);

    console.log("User created and logged in:", { email });
};
export default createUser;
