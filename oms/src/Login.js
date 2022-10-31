import React from 'react'
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Register from './Register'

function Login() {
  const loginToSys = (event) =>{
    event.preventDefault()
  }
  return (
    <div>
      <form>
        <input type="text" placeholder='Username' />
        <br /><br />
        <input type="password" placeholder='Password' />
        <br /><br />
        <input type="submit" value="Login" onClick={loginToSys}/>
      </form>
      
        <Link to="/register">Register</Link>
      
    </div>

  )
}

export default Login