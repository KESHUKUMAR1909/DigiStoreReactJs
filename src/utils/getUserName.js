function getUserName() {
    return (localStorage.getItem("loggedInUser")).slice(0,2) || null;
}
export default getUserName;
