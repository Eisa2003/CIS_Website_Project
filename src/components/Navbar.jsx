import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import '../../src/style.css';

export default function Navbar(props) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [resources, setResources] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => { // <- A useEffect runs at the first render too. That's why the code makes sense
    const timeout = setTimeout(() => {
      setAnimationKey((prev) => prev + 1);
    }, 7000);

    return () => clearTimeout(timeout);
  }, [animationKey]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        /* Original - http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/
           Test - http://localhost:3000/api/resources */

        const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/resources/');
        const data = await response.json();

        // Function to filter resources with unique occurrences
        function filterUniqueResources(resources) {
          const seenResources = new Set(); // Use Set for efficient uniqueness tracking
          const uniqueResources = [];

          for (const resource of resources) {
            if (resource && resource.resource) { // Check if resource exists and has a resource property
              const resourceName = resource.resource.toLowerCase();
              if (!seenResources.has(resourceName)) {
                seenResources.add(resourceName);
                uniqueResources.push(resource);
              }
            }
          }
          //console.log(seenResources);
          return uniqueResources;
        }

        const uniqueData = filterUniqueResources(data);
        setResources(uniqueData);

        console.log(uniqueData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

  }, [])

  useEffect(() => {
    const fiteredResults = resources.filter((resource) => resource.resourceName.toLowerCase().includes(searchText.toLowerCase()))
    setSearchResults(fiteredResults)
    //console.log(searchResults)
  }, [searchText, resources])

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

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleChange = (e) => {
    let text = e.target.value
    setSearchText(text)
  }

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
            <div className="searchWrapper">
              <div className='searchComponent'>
                <input className={searchText === '' ? 'searchBox' : 'searchBox searchResultsActive'} type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={handleChange} />
                <button className={searchText === '' ? 'searchBtn' : 'searchBtn searchResultsActive'} type="submit" >Search</button>
              </div>
              <div className="searchResults" style={{ display: searchText === '' ? 'none' : '' }}>
                {searchResults.length > 0 ? (
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {searchResults.map((resource) => (
                      <NavLink className="nav-link" style={{color: 'black'}} to={"Resources/" + resource.resource} key={resource.id}>{resource.resourceName}</NavLink>
                    ))}
                  </ul>
                ) : (
                  <p style={{ fontWeight: 'bold', display: 'block', textAlign: 'center', cursor: 'not-allowed' }}>No results found.</p>
                )}
              </div>


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
