import React, { useState } from 'react'

export default function AdminLogin() {
    const [validatorText, setValidatorText] = useState('');
    const [indicator, setIndicator] = useState(0);
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        password: ''
        
    })

    const handleClick = (indicator)=>{
        setValidatorText('');
        setIndicator(indicator);
    }
    
    const handleChange = (e) => {
        const {id, value} = e.target // target is the element that triggers the event
        setFormData((prevData) => (
            {
                ...prevData,
                [id]: value
            } // This way of defining the object helps us overwrite the previous data - Eisa
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(indicator === 0){
            if(formData.email.length  === 0 || formData.password.length === 0) // now this is for the login data
            {
                setValidatorText(`Cannot leave the fields empty + ${formData.email.length}`)
            }
            else
            {
                try{
                    const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/login',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        }
                    )
                    const result = await response.json();
                    setValidatorText(result);
                }
                catch(err)
                {
                    setValidatorText(err);
                }
                // setValidatorText(`good its not empty + ${formData.email.length}`)
            }
        } // end if for login
        else{
            if(formData.email.length  === 0 || formData.password.length === 0) // and this is for registering the admin
            {
                setValidatorText('Cannot leave the fields empty')
            }
            else
            {
                try{
                    const response = await fetch('http://emanagerapp-env.eba-eqcsmp9h.ap-south-1.elasticbeanstalk.com/api/admin/register',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        }
                    )
                    const result = await response.json();
                    setValidatorText(result);
                }
                catch(err)
                {
                    setValidatorText(err);
                }
                // setValidatorText('good its not empty')
            }
        } // end else for register
    }

  return (

    <div className='container'>
    <>
      <br /><hr />
      <h1 className='text-center'>Sign-in to get <strong>Admin</strong> access</h1><hr /><br />
      <h4 className="text-center text-danger">{validatorText}</h4>
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" id="loginnav" role="presentation">
          <a
            className={indicator === 0 ? 'nav-link lactive': 'nav-link' }
            id="tab-login"
            href=''
            role="tab"
            aria-controls="pills-login"
            onClick={() => handleClick(0)} // We need to assign a function 
                                           // the attr because it runs imm when the
                                           // component
          >
            Login
          </a>
        </li>
        <li className="nav-item" id="loginnav" role="presentation">
          <a
            className={indicator === 1 ? 'nav-link lactive': 'nav-link' }
            id="tab-register"
            href="#"
            role="tab"
            aria-controls="pills-register"
            onClick={() => handleClick(1)}
          >
            Register
          </a>
        </li>
      </ul>
      {/* Pills navs */}

      {/* Pills content */}
      <div className="tab-content">
        <div
          className={indicator === 0 ? "tab-pane fade show active": "tab-pane fade"}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleSubmit}>

            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange}/>
              <label className="form-label" htmlFor="loginName">
                Email or Admin Username
              </label>
            </div>

            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="password" className="form-control" value={formData.password} onChange={handleChange}/>
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
            </div>

            {/* 2 column grid layout */}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                {/* Checkbox */}
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

              <div className="col-md-6 d-flex justify-content-center">
                {/* Simple link */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-4"
              style={{backgroundColor: '#9AA581', borderColor: '#9AA581'}}
            >
              Sign in
            </button>

            {/* Register buttons */}
            <div className="text-center">
              <p>
                Not a member? <a href="#" onClick={() => handleClick(1)}>Register</a>
              </p>
            </div>
          </form>
        </div>
        <div
          className={indicator === 1 ? "tab-pane fade show active": "tab-pane fade"}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form onSubmit={handleSubmit}>
            

            {/* Name input */}

            {/* Username input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" />
              <label className="form-label" htmlFor="registerUsername">
                Admin Username
              </label>
            </div>

            {/* Email input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
            </div>

            {/* Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
            </div>

            {/* Repeat Password input */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              data-mdb-button-init
              data-mdb-ripple-init
              className="btn btn-primary btn-block mb-3"
              style={{backgroundColor: '#9AA581', borderColor: '#9AA581'}}
            >
              Sign in
            </button>
          </form>
          <br />
        </div>
      </div>
      {/* Pills content */}
    </>

    </div>
  )
}
