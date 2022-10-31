import React from 'react'
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'

function Register() {
  return (
    <div>
      <form>
        <input type="text" placeholder='Name'/>
        <br/><br/>
        <input type="text" placeholder='Email'/>
        <br/><br/>
        <input type="submit" value="Register"/>
      </form>
      <Link to="/">Login</Link>
    </div>
  )
}

export default Register