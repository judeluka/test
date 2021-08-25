import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="logo-img" src="https://www.pinclipart.com/picdir/big/125-1252159_republic-of-ireland-dog-clipart.png"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Twitter Data
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/tdlist"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TD List
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/td/michaelmartin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                News Coverage
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Electoral Data
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;