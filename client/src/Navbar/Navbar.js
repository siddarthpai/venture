import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            ></Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <div className="navbar-container container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Company
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/people"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    People
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/violations"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Violations
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Statistics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      "nav-links" + (isActive ? " activated" : "")
                    }
                    onClick={closeMobileMenu}
                  >
                    LogOut
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
