function checkDetailsValidity(email, password, confirmPassword, setIsValidDetails) {
    console.log("Email:", email); // Debugging
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (!email || !password || !confirmPassword) {
        alert("Email, password, and confirm password are required.");
        setIsValidDetails(false);
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        setIsValidDetails(false);
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        setIsValidDetails(false);
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        setIsValidDetails(false);
        return;
    }

    setIsValidDetails(true);
}
export default checkDetailsValidity