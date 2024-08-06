import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import TokenContext from './TokenContext'; // The reference to the created context

export default function AdminLogin() {
  const [validatorText, setValidatorText] = useState('');
  const [indicator, setIndicator] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [adminToken, setAdminToken] = useState('');
  const { token, setToken } = useContext(TokenContext); // Access token from context hook

  const navigate = useNavigate(); // Calling a React hook that returns a 
  // function object called navigate(That's what I think)
  // But we are storing the reference in the variable called navigate so it doesn't even matter

  /*
  const storeToken = (token) => {
    Cookies.set('authToken', token, { expires: process.env.EXPIRES_IN / 3600, httpOnly: true }); // expires in an hour
  }

  const retrieveToken = () => Cookies.get('authToken'); // Will be using this in a diff file
  */

  const handleClick = (e, indicator) => {
    e.preventDefault();
    setValidatorText('');
    setIndicator(indicator);
  }

  const handleChange = (e) => { // working kind of like useEffect
    const { id, value } = e.target // target is the element that triggers the event
    setFormData((prevData) => (
      {
        ...prevData,
        [id]: value // the `id` and `value` are from the attr of the elements
      } // This way of defining the object helps us overwrite the previous data - Eisa
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (indicator === 0) {
      if (formData.email.length === 0 || formData.password.length === 0) // now this is for the login data
      {
        setValidatorText(`Cannot leave the fields empty + ${formData.email.length}`)
      }
      else {
        const loginFormData = {
          email: formData.email,
          password: formData.password
        }

        // Original link for the API - http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/login
        // Test link for the API - http://localhost:5001/api/admin/login

        try {
          const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginFormData)
            }
          )

          if (!response.ok) {
            let data = await response.json() // we are still receiving a response msg from the API
            // So we are converting and storing that response for us to 
            // throw/attach it to the message prop of the Error object
            throw new Error(data.message) // We access the actual message rec from the API
            // and then concatenate it with the Error's msg
          }
          const data = await response.json(); // Parse JSON for the successful response

          // console.log("The result from success: " + data)
          // setValidatorText(data.accessToken);
          setToken(data.accessToken);
          // storeToken(data.accessToken);
          console.log("This is from the AdminLogin : " + token);
          navigate('/Admin/Access/Controls'); // a function imported from the react-router module

        } catch (err) {
          // Handle errors from both fetch and backend API

          setValidatorText(err.message); // and error object always has the prop called message (NO OTHER NAME!)
        }
      }
    } // end if/else for login

    else // This else is for the indicator so don't get confused <- The registration part
    {
      if (formData.name.length === 0 || formData.email.length === 0 || formData.password.length === 0) // and this is for registering the admin
      {
        setValidatorText('Cannot leave the fields empty')
      }
      else if (formData.password !== formData.confirmPassword) {
        setValidatorText("The passwords doesn't match")
      }
      else if (adminToken !== "cisofscadmin") {
        setValidatorText('Please provide a valid admin token')
      }
      else {
        const RegisterFormData = {
          adminName: formData.name,
          email: formData.email,
          password: formData.password
        }

        // Original link for the API - http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/register
        // Test link for the API - http://localhost:5001/api/admin/register

        try {
          const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/register',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(RegisterFormData)
            }
          )

          if (!response.ok) {
            let data = await response.json()
            throw new Error(data.message) // Any kind of error message for the registration part
          }
          const data = await response.json(); // Parse JSON for the successful response

          // console.log("The result from success: " + data)
          setValidatorText(data.message); // This message is from the JSON object
          // storeToken(data.accessToken); <- This was for the login part
        } catch (err) {
          // Handle errors from both fetch and backend API

          setValidatorText(err.message); // and error object always has the prop called message (NO OTHER NAME!)
        }
        // setValidatorText('good its not empty')
      }
    } // end else for register
  }

  return (

    <>
      <div className='container'>
        <br /><hr />
        <h1 className='text-center'>Sign-in to get <strong>Admin</strong> access</h1><hr /><br />
        <h4 className={validatorText === "Admin Registered Successfully!" ? "text-center text-success" : "text-center bg-danger text-white"}
          style={{ borderRadius: '5px', maxWidth: 'fit-content', marginInline: 'auto' }}>{validatorText}</h4>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" >
          <li className="nav-item" id="loginnav" role="presentation">
            <a
              className={indicator === 0 ? 'nav-link lactive' : 'nav-link'}
              id="tab-login"
              href='/'
              role="tab"
              aria-controls="pills-login"
              style={{ color: 'black' }}
              onClick={(e) => handleClick(e, 0)} // We need to assign a function 
            // the attr because it runs imm when the
            // component
            >
              Login
            </a>
          </li>
          <li className="nav-item" id="loginnav" role="presentation">
            <a
              className={indicator === 1 ? 'nav-link lactive' : 'nav-link'}
              id="tab-register"
              href="/"
              role="tab"
              aria-controls="pills-register"
              style={{ color: 'black' }}
              onClick={(e) => handleClick(e, 1)}
            >
              Register
            </a>
          </li>
        </ul>
        {/* Pills navs */}

        {/* Pills content */}
        <div className="tab-content">
          <div
            className={indicator === 0 ? "tab-pane fade show active" : "tab-pane fade"}
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleSubmit}>

              {/* Email input */}
              {/* The values are the initial ones that the reactive var sets */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                <label className="form-label" htmlFor="loginName">
                  Email or Admin Username
                </label>
              </div>

              {/* Password input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              {/* 2 column grid layout */}
              {/*
              <div className="row mb-4">
                
                <div className="col-md-6 d-flex justify-content-center">
                  {/* Checkbox 
                  
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      defaultChecked
                    />
                    
                    <label className="form-check-label" htmlFor="loginCheck">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center" >
                  {/* Simple link 
                  <a href="#!">Forgot password?</a>
                </div>
              </div>*/}

              {/* Submit button */}
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-4"
                style={{ backgroundColor: '#9AA581', borderColor: '#9AA581' }}
              >
                Sign in
              </button>

              {/* Register buttons */}
              <div className="text-center">
                <p>
                  Not a member? <a href="#" onClick={(e) => handleClick(e, 1)}>Register</a>
                </p>
              </div>
            </form>
          </div>
          <div
            className={indicator === 1 ? "tab-pane fade show active" : "tab-pane fade"}
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form onSubmit={handleSubmit}>


              {/* Name input */}

              {/* Username input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} />
                <label className="form-label" htmlFor="registerUsername">
                  Admin Username
                </label>
              </div>

              {/* Email input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              {/* Password input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange} />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              {/* Repeat Password input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              {/* Admin token input */}
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="password" id="token" className="form-control" value={adminToken} onChange={(e) => setAdminToken((prevAdminToken) => e.target.value)} />
                <label className="form-label" htmlFor="adminToken">
                  adminToken
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-block mb-3"
                style={{ backgroundColor: '#9AA581', borderColor: '#9AA581' }}
              >
                Sign in
              </button>
            </form>
            <br />
          </div>
        </div>
        {/* Pills content */}


      </div>
    </>
  )
}
