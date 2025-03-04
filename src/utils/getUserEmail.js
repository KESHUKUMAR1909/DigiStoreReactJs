function getUserEmail(){
    return localStorage.getItem("loggedInUser")|| null;
}
export default getUserEmail;