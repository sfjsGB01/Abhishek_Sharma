import React from 'react'
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import axios from './util/axiosConfig'

function Register() {
  const [username,setUsername] = React.useState("")
  const [password,setPassword] = React.useState("")
  const navigate = useNavigate()
  const registerToSys = (event) =>{
    event.preventDefault()
    console.log({"username":username,"password":password})

    axios.post("register",{'username':username,'password':password}).then((result)=>{
      console.log("success")
      console.log(result?.data)
    }).catch((error)=>{
      console.log("error")
      console.log(error?.message)
    })

    // navigate("/Home")
  }

  const onUsernameChange = (event)=>{
    setUsername(event.target.value)
  }

  const onPasswordChange = (event)=>{
    setPassword(event.target.value)
  }
  return (
    <div>
      <form>
      <input type="text" placeholder='Username' value={username} onChange={onUsernameChange} />
        <br/><br/>
        <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} />
        <br/><br/>
        <input type="submit" value="Register" onClick={registerToSys}/>
      </form>
      <Link to="/">Login</Link>
    </div>
  )
}

export default Register