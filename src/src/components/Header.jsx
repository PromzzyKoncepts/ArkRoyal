import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";


const Header = () => {
  return (
    <div>
      <header data-aos="fade-down" className="header">
        <div className="header-div">
          <img src={logo} className="logo-image" />
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li>
                <a href="#section_people" className="nav-link">
                  Our Members
                </a>
              </li>

              <li>
                <NavLink to="/projects" className="nav-link">
                  Projects
                </NavLink>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header