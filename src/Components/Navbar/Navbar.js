import React, { useState } from "react";

import "./Navbar.css";
import { navItems } from "./NavbarItems";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="Navbar">
        
        <h1 className="navbar-logo">Sarli</h1>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <a className={item.cName} href={item.path}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
