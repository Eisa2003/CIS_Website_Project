import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminNavbar(props) {
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
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Admin/Access/Controls/Events">Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Admin/Access/Controls/Events">Resource Cards</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
