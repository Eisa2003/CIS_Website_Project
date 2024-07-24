import React from 'react';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';


export default function Footer({ companyName, companyDescription, companyAddress, companyEmail, companyPhone }) {
  return (
    <div>
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#38422B' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#9AA581' }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <a href="/" className="text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/" className="text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/" className="text-white">
              <i className="bi bi-google"></i>
            </a>
            <a href="/" className="text-white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="/" className="text-white">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/" className="text-white">
              <i className="bi bi-github"></i>
            </a>
          </div>

          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="" style={{ backgroundColor: '#38422B' }}>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">{companyName}</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#CAAD7E', height: '2px' }} />
                <p>{companyDescription}</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Controls</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#CAAD7E', height: '2px' }} />
                <p>
                  <NavLink className="text-white" to='/Admin/Access/'>Admin Controls</NavLink>
                </p>
                <p>
                  <NavLink className="text-white" to='/'>User</NavLink>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#CAAD7E', height: '2px' }} />
                <p>
                  <NavLink className="text-white" to='/'>Your Account</NavLink>
                </p>
                <p>
                  <NavLink className="text-white" to='/ContactUs'>Help</NavLink>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#CAAD7E', height: '2px' }} />
                <p><i className="bi bi-house-door-fill"></i> {companyAddress}</p>
                <p style={{position:'relative'}}><i className="bi bi-envelope-fill"></i> helpinhamptoncounty<br/>@cisofsc.org</p>
                <p><i className="bi bi-telephone-fill"></i> {companyPhone}</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: '#9AA581' }}>
          © 2024 Copyright:
          <NavLink className="text-white" to='/'>HCresourcecenter.com</NavLink>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

Footer.defaultProps = {
  companyName: 'HC Resource Center',
  companyDescription: "A website for the betterment of the community.",
  companyAddress: 'North Charleston, SC 29405, US',
  companyEmail: 'helpinhamptoncounty@cisofsc.org',
  companyPhone: '+ 01 234 567 88'
} // end setting of default props
