import logo from "./images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} className="" alt="logo" />
        </a>
      </div>
      <div className="Links">
        <Link to="/destinations"> Destinations </Link>
        <Link to="/potd"> POTD </Link>
        <Link to="/news"> News </Link>
        <Link href="/about"> About us </Link>
        <Link href="/login"> Login </Link>
      </div>
    </nav>
  );
};

export default Navbar;
