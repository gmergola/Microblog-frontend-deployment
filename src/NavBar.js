import React, { useState } from "react"
import { Link } from "react-router-dom";
import './NavBar.css';


/**
 * NavBar: shows navbar component to navigate around the page
 */
function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  function toggleOpen() {
    setOpenNav(!openNav);
  }

  return (
    <nav className="navbar navbar-expand navbar-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <div
              className="nav-link dropdown-toggle"
              onClick={toggleOpen}
              role="button">
              <div className="navbar-toggler-icon" ></div>
            </div>

            <div className={`dropdown-menu${openNav ? " show" : ""}`}>
              <Link to="/blog" className="dropdown-item">B l o g</Link>
              <Link to="/new" className="dropdown-item">N e w  P o s t</Link>
            </div>

          </li>
        </ul>
      </div>
      <Link to="/" className="navbar-title"> M i c r o b l o g </Link>
    </nav>
  );
}


export default NavBar;