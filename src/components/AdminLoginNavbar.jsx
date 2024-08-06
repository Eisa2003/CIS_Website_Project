import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminLoginNavbar(props) {
  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '25px 15px 25px 15px', backgroundColor: '#38422B' }}>
        <div className='container'>
          <NavLink className='' style={{color: 'white', textDecoration: 'none', fontSize: '30px', maxWidth: 'fit-content', marginInline: 'auto'}} to="/Admin/Access/">
            <strong>{props.title}</strong>
          </NavLink>
        </div>
      </nav>
    </div>
    </div>
  )
}
