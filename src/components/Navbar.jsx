import React, { useState } from "react";


import { Link } from "react-router-dom";

import { FaBars , FaTimes} from "react-icons/fa";


const Navbar = () => {

    const [isOpen, setIsOpen] =useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <>

    <div className="Navbar">
      <div className="navbar-logo">React Navigation</div>

      <ul  className="navbar-links"> 
        <button  className="closed-drawer" onClick={closeMenu}>
            <FaTimes />
        </button>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
       </div>
      </div>
    
    </>
   
  );
};

export default Navbar;
