import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown visibility

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleDropdownClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    toggleDropdown(); // Toggle dropdown visibility
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled beyond a certain threshold
      const threshold = 100; // You can adjust this value as needed
      if (window.scrollY > threshold) {
        // Add a class to the navbar to fix it at the top
        document.querySelector('.navbar').classList.add('fixed-top');
      } else {
        // Remove the fixed-top class if the user scrolls back up
        document.querySelector('.navbar').classList.remove('fixed-top');
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: '25px 15px 25px 15px'}}>
        <div className='container'>
        <a className="navbar-brand" href="/"><strong>{props.title}</strong></a>
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
            <li className="nav-item active">
              <a className="nav-link" href="/">{props.home} <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.contactUs}</a>
            </li>
            <li className="nav-item dropdown">
                <a 
                    className={`nav-link dropdown-toggle ${isDropdownOpen ? 'show' : ''}`} // Apply 'show' class based on dropdown state
                    href="/" 
                    id="navbarDropdown" 
                    role="button" 
                    onClick={handleDropdownClick} // Toggle dropdown visibility on click
                >
                    {props.links}
                </a>
                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown"> {/* Apply 'show' class based on dropdown state */}
                    <a className="dropdown-item" href="/">Education</a>
                    <a className="dropdown-item" href="/">Children/Youth Services</a>
                    <a className="dropdown-item" href="/">Clothing Assistance</a>
                    <a className="dropdown-item" href="/">Crisis Support</a>
                    <a className="dropdown-item" href="/">Financial Assistance</a>
                    <a className="dropdown-item" href="/">Food Assistance</a>
                    <a className="dropdown-item" href="/">Law Enforcement</a>
                    <a className="dropdown-item" href="/">Lowcountry Council of Governments</a>
                    <a className="dropdown-item" href="/">Medication Assistance</a>
                    <a className="dropdown-item" href="/">Recovery Resources</a>
                    <a className="dropdown-item" href="/">Shelters</a>
                    <a className="dropdown-item" href="/">Women Services</a>
                    
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/">Something Special</a>
                </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ marginLeft: '5px' }}>Search</button>
          </form>
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
}; // end propType dec

Navbar.defaultProps = {
    title: 'Set title here',
    home: 'Home',
    contactUs: 'Contact Us',
    about: 'About Us',
    links: 'Resources'
}; // end setting default props
