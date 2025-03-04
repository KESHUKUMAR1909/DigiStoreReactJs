function deleteAccount(email , setIsLogin) {
    let users = JSON.parse(localStorage.getItem("users")) || {}; // Parse the users object


    if (!users[email]) { // Check if user exists
        return alert("User not found!");
    }

    delete users[email]; // Remove user
    localStorage.removeItem("profileImage"); // Clear profile image
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLogin");
    localStorage.setItem("users", JSON.stringify(users)); 
    setIsLogin(false);// Save updated users object
    alert("User deleted successfully!");
}
export default deleteAccount;