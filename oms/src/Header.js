import React from 'react'
import { useAuthContext } from './hooks/UseAuth'

function Header() {
  const { setLogin, setBearerToken } = useAuthContext()
  const logout = ()=>{
    setLogin(false)
    setBearerToken("")
  }
  return (
    <div>Header
      <br/>
      <input type="button" value="Logout" onClick={logout} />
    </div>
  )
}

export default Header