import React from 'react';

export default function Footer({ companyName, companyDescription, companyAddress, companyEmail, companyPhone }) {
  return (
    <div>
      <footer className="text-center text-lg-start text-white bg-dark">
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '#6351ce' }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="/" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">{companyName}</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>{companyDescription}</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-white">Something</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Something</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Something</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Something</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> {companyAddress}</p>
                <p><i className="fas fa-envelope mr-3"></i> {companyEmail}</p>
                <p><i className="fas fa-phone mr-3"></i> {companyPhone}</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright: 
          <a className="text-white" href="/">CISSC.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

Footer.defaultProps = {
    companyName: 'CISSC',
    companyDescription: "I'll write something over here afterwards.",
    companyAddress: 'North Charleston, SC 29405, US',
    companyEmail: 'info@example.com',
    companyPhone: '+ 01 234 567 88'
} // end setting of default props

