import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-2">
      <div className="container-fluid">

        {/* 🔹 Brand Name */}
        <Link className="navbar-brand fw-bold text-primary fs-4" to="/">
          MyWebsite
        </Link>

        {/* 🔹 Toggler Button for Mobile */}
       

        {/* 🔹 Navbar Links */}
        <div className=" justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>

            <li className="nav-item mx-2">
              <Link className="nav-link text-dark" to="/about">About</Link>
            </li>

            {/* 🔹 Dropdown Menu */}
            <li className="nav-item dropdown mx-2">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="h"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><Link className="dropdown-item" to="/Gallery">Page 1</Link></li>
                <li><Link className="dropdown-item" to="/Homepage">Page 2</Link></li>
                <li><Link className="dropdown-item" to="/Homepage3">Page 3</Link></li>
            
                <li><Link className="dropdown-item" to="/test">Page 4</Link></li>
              </ul>
            </li>

            <li className="nav-item mx-2">
              <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
