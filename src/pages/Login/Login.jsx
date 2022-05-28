import React from 'react'

const Login = () => {
  return (
    <div className='card p-3 w-50 m-auto'>
      <div className="text-center">
        <span className='fw-bolder fs-3 text-danger'>Login</span>
      </div>
      <div className="mb-3 mt-3">
        <label for="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
      </div>
      <div class="mb-3">
        <label for="pwd" className="form-label">Password:</label>
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
      </div>
    </div>
  )
}

export default Login