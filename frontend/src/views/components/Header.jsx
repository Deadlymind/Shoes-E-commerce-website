
import {Link, useLocation} from 'react-router-dom';
import './header.css'
const Header = () => {
    const { pathname } = useLocation();
    return (
        <>
        <nav className="header">
            <div className="logo">Super Fripe</div>
            <ul className='nav-links'>
                <li>
                <Link to="/Home" className={pathname === '/' || pathname === '/Home' ? 'active' : ''}>
                        Home
                        </Link>
                </li>
                <li>
                <Link to="/Shop" className={pathname === '/Shop' ? 'active' : ''}>
                Shop
                </Link>
                   
                </li>
                <li>
                    <Link to="/About " className={pathname === '/About'? 'active' : ''}>
                    About Us
                    </Link>
                  
                </li>
                <li>
                    <Link to="/Contact" className={pathname === '/Contact' ? 'active' : ''}>
                    Contact Us
                    </Link>
                   
                </li>
            </ul>
            <div className="icons">
            <i className="bi bi-heart"></i>
            <i className="bi bi-bag"></i>
            </div>
                <button className="btn1">Sign Up</button>
                <button className="btn2">Sign In</button>
            </nav>
           
          
            </>
    )
}
export default Header;