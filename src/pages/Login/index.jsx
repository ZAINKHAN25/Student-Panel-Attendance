import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='loginwrapper'>
      <div className='logincard'>
        <h1>Login</h1>
        <label className="col-form-label txtoflogin">Write Student email here:</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input type="text" className="form-control inputoflogin" placeholder="Student Email" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <label className="col-form-label txtoflogin">Write Student password here:</label>
        <input type="password" placeholder='Student Password' className="form-control inputoflogin" id="inputPassword" />
        <button type="button" className="btn btn-primary mt-3">Login</button>
      </div>
    </div>
  )
}

export default Login;