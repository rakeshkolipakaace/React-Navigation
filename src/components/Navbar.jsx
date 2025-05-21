import React from "react";

import { Link } from "react-router-dom";

import { FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {
  return (
    <>

    <div className="Navbar">
      <div className="navbar-logo">React Navigation</div>

      <ul  className="navbar-links"> 
        <button  className="closed-drawer">
            <FaTimes />
        </button>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="menu-icon">
        <FaBars/>
      </div>
    </div>
    </>
   
  );
};

export default Navbar;
