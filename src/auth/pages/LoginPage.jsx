import React from 'react'
import './LoginPage.css'

export const LoginPage = () => {
  return (
    <form className="form-login">
      <div className="form-image">
        <img className="form-image-div" src="/cow.svg"></img>
      </div>
      <input className="form-items" type="text" id="username" placeholder="User"/>
      <input className="form-items" type="password" id="password" placeholder="Password"  />
      <button className="form-items form-button">Login</button>
    </form>
  )
}


