// import logo from "./images/logo.svg";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">
//           <img src={logo} className="" alt="logo" />
//         </Link>
//       </div>
//       <div className="Links">
//         <Link to="/destinations"> Destinations </Link>
//         <Link to="/potd"> POTD </Link>
//         <Link to="/news"> News </Link>
//         <Link to="/help"> Help </Link>
//         <Link to="/login"> Login </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import logo from "./images/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`links ${menuOpen ? "show" : ""}`}>
        <Link to="/destinations"> Destinations </Link>
        <Link to="/potd"> POTD </Link>
        <Link to="/news"> News </Link>
        <Link to="/help"> Help </Link>
        <Link to="/login"> Login </Link>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "line-1" : ""}`} />
        <div className={`line ${menuOpen ? "line-2" : ""}`} />
        <div className={`line ${menuOpen ? "line-3" : ""}`} />
      </div>
    </nav>
  );
};

export default Navbar;