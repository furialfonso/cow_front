import React from 'react'
import{useNavigate} from 'react-router-dom'
import './LoginPage.css'

export const LoginPage = () => {
  const navigate = useNavigate()
  const onLogin = (event) => {
    event.preventDefault()
    navigate('/dashboard', {
      replace: true
    })
  };

  return (
    <form className="form-login" onSubmit={(event)=>onLogin(event)}>
      <div className="form-image"/>
      <input className="form-items" type="text" id="username" placeholder="User" autoComplete="username" />
      <input className="form-items" type="password" id="password" placeholder="Password" autoComplete="current-password" />
      <button className="form-items form-button">Login</button>
    </form>
  )
}


