import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import '../../src/style.css';

export default function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const location = useLocation();

  const activeDropdownPaths = [
    '/Resources/Emp&Edu',
    '/Resources/MHealth&Abuse',
    '/Resources/Housing',
    '/Resources/FoodAsst',
    '/Resources/Util&BasicNeeds',
    '/Resources/Health',
    '/Resources/LegalAid',
    '/Resources/CrisisHotlines',
    '/Resources/Trafficking',
    '/Resources/Senior&Disab',
    '/Resources/Other'
  ];

  useEffect(() => { // <- A useEffect runs at the first render too. That's why the code makes sense
    const timeout = setTimeout(() => {
      setAnimationKey((prev) => prev + 1);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [animationKey]);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  /*
  <NavLink className={`navbar-brand ${animationKey}`} to="/" key={animationKey}>
            <strong>{props.title}</strong>
          </NavLink>*/

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{}}>
        <div className='container'>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{ marginRight: 'auto' }}>
              <li className={`nav-item ${location.pathname === '/' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/">{props.home}</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/About' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/About">{props.about}</NavLink>
              </li>
              <li className={`nav-item ${location.pathname === '/ContactUs' ? 'isActive' : ''}`}>
                <NavLink className="nav-link" to="/ContactUs">{props.contactUs}</NavLink>
              </li>
              <li className={`nav-item dropdown ${activeDropdownPaths.includes(location.pathname) ? 'isActive' : ''}`}>
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  id="navbarDropdown" 
                  role="button" 
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {props.links}
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/Resources/Emp&Edu">Employment & Education</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/MHealth&Abuse">Mental Health & Substance Abuse</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/Housing">Housing</NavLink>
                  <NavLink className="dropdown-item" to="/Resources/FoodAsst">Food Assistance</NavLink>
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
                <button className="searchBtn" type="submit">Search</button>
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
