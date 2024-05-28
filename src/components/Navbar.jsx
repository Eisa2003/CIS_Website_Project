import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import '../../src/style.css';

export default function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown visibility
  //const [activeLink, setActiveLink] = useState('/'); // State for tracking active link
  const [animationKey, setAnimationKey] = useState(0); // State to control re-triggering animation

  const activeLink = '/';
  const location = useLocation();

  useEffect(() => {
    // Update active link based on current URL path
    activeLink = location.pathname;
    //setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // Re-add the animation class after a delay
    const timeout = setTimeout(() => {
      setAnimationKey((prev) => prev + 1); // Increment key to re-trigger animation
    }, 7000); // 1s animation duration + 3s delay

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, [animationKey]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    toggleDropdown(); // Toggle dropdown visibility
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '25px 15px 25px 15px', backgroundColor: '#38422B'}}>
        <div className='container'>
          <NavLink className={`navbar-brand ${animationKey}`} to="/" key={animationKey}>
            <strong>{props.title}</strong>
          </NavLink>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded={!isNavCollapsed ? true : false} // Change aria-expanded based on state
            aria-label="Toggle navigation"
            onClick={handleNavCollapse} // Add onClick handler to toggle state
          >
            <span className="navbar-toggler-icon"></span>
          </button> {/* Bootstrap's Navbar relies on JavaScript to toggle the visibility of the collapsed content when the Navbar toggler button is clicked. */}

          {/* We toggle the collapse class from bootstrap to this div to hide and display the nav contents */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginRight: 'auto' }}>
              <li className={`nav-item ${activeLink === '/' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/">{props.home}</NavLink>
              </li>
              <li className={`nav-item ${activeLink === '/About' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/About" >{props.about}</NavLink>
              </li>
              <li className={`nav-item ${activeLink === '/ContactUs' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/ContactUs">{props.contactUs}</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink 
                  className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`} // Apply 'show' class based on dropdown state
                  to="/" 
                  id="navbarDropdown" 
                  role="button" 
                  onClick={handleDropdownClick} // Toggle dropdown visibility on click
                >
                  {props.links}
                </NavLink>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown"> {/* Apply 'show' class based on dropdown state */}
                  <NavLink className="dropdown-item" to="/Resources/Emp&Edu">Employment & Education</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/MHealth&Abuse">Mental Health & Substance Abuse</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Housing">Housing</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/FoodAsst">Food Assisstance</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Util&BasicNeeds">Utilities & Basic Needs</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Health">Health</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/LegalAid">Legal Aid</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/CrisisHotlines">Crisis Hotlines</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Trafficking">Trafficking, Abuse, & Violence Services</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Senior&Disab">Senior & Disability Services</NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item" to="/Resources/Other">Other</NavLink>
                </div>
              </li>
            </ul>
            <div className='searchComponent'>
              <form className="form-inline my-2 my-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
                <input className="searchBox" type="search" placeholder="Search" aria-label="Search" />
                <button className="searchBtn" type="submit" >Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  contactUs: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  links: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  home: 'Home',
  contactUs: 'Contact Us',
  about: 'About Us',
  links: 'Resources'
};
