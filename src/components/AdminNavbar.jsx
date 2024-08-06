import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TokenContext from './TokenContext'; // The reference to the created context

export default function AdminNavbar(props) {
  const [activeLinkNumber, setActiveLinkNumber] = useState(1);// We can also use react's useLocation hook but I wanted to someting easy and diff
  const { setAdminControlPage } = useContext(TokenContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '25px 15px 25px 15px', backgroundColor: '#38422B' }}>
        <div className='container'>
          <NavLink className='' style={{color: 'white', textDecoration: 'none', fontSize: '30px'}} to="/Admin/Access/">
            <strong>{props.title}</strong>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className= { `nav-item ${activeLinkNumber === 1 ? 'isActive' : '' }` }>
                <a className="nav-link active" href='#' aria-current="page" onClick={(e) => {e.preventDefault(); setAdminControlPage('eventsPage'); setActiveLinkNumber(1);}}>Events</a>
              </li>
              <li className={ `nav-item ${activeLinkNumber === 2 ? 'isActive' : '' }` }>
                <a className="nav-link" href='#' onClick={(e) => {e.preventDefault(); setAdminControlPage('resourcesPage'); setActiveLinkNumber(2);}}>Resource Cards</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
