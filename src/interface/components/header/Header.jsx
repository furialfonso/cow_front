import React, { useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut'

export const Header = ({ showSideBar, setShowSideBar }) => {
  const navigate = useNavigate()
  const signOut = useSignOut()

  const logOut = (event) => {
    event.preventDefault()
    signOut()
    navigate('/', {
      replace: true
    })
  }

  const changeState = (event) => {
    event.preventDefault()
    setShowSideBar(prevValue => prevValue === "none" ? "block" : "none");
  }

  return (
    <header>
      <div className="burger-button" onClick={(event) => changeState(event)} />
      <button className="logout" onClick={(event) => logOut(event)} >Log Out</button>
    </header>
  )
}
