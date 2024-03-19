import React, { useState } from 'react'
import '../css/Login.css'

const Login = () => {
  const [username, serUsername] = useState('')
  const [password, serPassword] = useState('')
  const [role, setRole] = useState('customer')
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2> <br/>
        <div className="form-group">
          <label htmlfor="username">Username:</label>
          <input type="text" placeholder='Enter Username'
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlfor="username">Password:</label>
          <input type="password" placeholder='Enter Password'
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlfor="role">Role:</label>
          <select name="role" id="role"
          onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login