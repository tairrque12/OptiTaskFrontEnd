import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <span className="footer-brand">OPTITASK</span>
            <div className="footer-links">
                <Link to="/faq" className="footer-button">FAQ</Link>
                <Link to="/demo" className="footer-button">Schedule Demo</Link>
                <Link to="/contact" className="footer-button">Contact Us</Link>
            </div>
            <p className="footer-copy">&copy; 2026 OptiTask. All rights reserved.</p>
        </footer>
    );
}

export default Footer;