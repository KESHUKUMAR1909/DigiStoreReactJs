function getCompleteUserName() {
    return localStorage.getItem("loggedInUser").split("@")[0] || null;
}

export default getCompleteUserName;
