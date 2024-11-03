import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h2>Super Fripe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Sed Do Eiusmod Tempor incididunt UTt Labore Et Dolore Magna Aliqua.</p>
            
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <div className="footer-socials">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 copyright deadlyumind</p>
            </div>
        </footer>
    );
};
export default Footer;