import React from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";


const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-div">
          <img src={logo} className="logo-image" />
          <nav>
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#section_people" className="nav-link">
                  Our Members
                </a>
              </li>
              
              <li>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link">
                  Blogs
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header