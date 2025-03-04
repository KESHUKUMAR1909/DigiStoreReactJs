import { Link } from "react-router-dom";
import "./Footer.css"
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Keshu Kumar. All Rights Reserved.</p>
                <div className="footer-links">
                    <Link to="https://github.com/KESHUKUMAR1909" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </Link>
                    <Link to="https://www.linkedin.com/in/keshu-kumar-27368028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
