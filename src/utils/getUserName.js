function getUserName() {
    const user = localStorage.getItem("loggedInUser");
    return user ? user.slice(0, 2) : null;
}
export default getUserName;
