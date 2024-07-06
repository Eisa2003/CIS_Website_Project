import React from 'react'

export default function AdminNavbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ padding: '25px 15px 25px 15px', backgroundColor: '#38422B'}}>
      <div className='container'>
        <h3 className='text-white text-center'>{props.title}</h3>
      </div>
      </nav>
    </div>
  )
}
