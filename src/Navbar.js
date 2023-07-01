import logo from './logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <img src={logo} className="" alt="logo" />
            </div>
            <div className="links">
                <a href="/Booking"> Destinations </a>
                <a href="/POTD"> POTD </a>
                <a href="/News"> News </a>
                <a href="/About"> About us </a>
                <a> Login </a>     
            </div>
        </nav>
    );
}
 
export default Navbar;