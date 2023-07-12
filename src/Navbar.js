import logo from './images/logo.svg';
import './Navbar.css'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="logo">
                <a href = "/">
                <img src={logo} className="" alt="logo" /></a>
            </div>
            <div className="links">
                <a href="/destinations"> Destinations </a>
                <a href="/potd"> POTD </a>
                <a href="/news"> News </a>
                <a href="/about"> About us </a>
                <a> Login </a>     
            </div>
        </nav>
    );
}
 
export default Navbar;