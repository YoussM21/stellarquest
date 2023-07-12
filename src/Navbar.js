import logo from "./images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} className="" alt="logo" />
        </Link>
      </div>
      <div className="Links">
        <Link to="/destinations"> Destinations </Link>
        <Link to="/potd"> POTD </Link>
        <Link to="/news"> News </Link>
        <Link to="/about"> About us </Link>
        <Link to="/login"> Login </Link>
      </div>
    </nav>
  );
};

export default Navbar;
