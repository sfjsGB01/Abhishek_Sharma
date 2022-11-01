import React from 'react'
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import axios from './util/axiosConfig'
import { useAuthContext } from './hooks/UseAuth'

function Login() {
  const [username,setUsername] = React.useState("")
  const [password,setPassword] = React.useState("")
  const { setLogin, setBearerToken } = useAuthContext()

  const navigate = useNavigate()
  const loginToSys = (event) =>{
    event.preventDefault()
    console.log({"username":username,"password":password})

    axios.post("user",{'username':username,'password':password}).then((result)=>{
      console.log("success")
      console.log(result?.data)
      setLogin(true)
      setBearerToken("token")
    }).catch((error)=>{
      console.log("error")
      console.log(error?.message)
    })

    navigate("/Home")
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
        <br /><br />
        <input type="password" placeholder='Password' value={password} onChange={onPasswordChange} />
        <br /><br />
        <input type="submit" value="Login" onClick={loginToSys}/>
      </form>
      
        <Link to="/register">Register</Link>
      
    </div>

  )
}

export default Login