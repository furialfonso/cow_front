import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [showSideBar, setShowSideBar] = useState(true)
  const navigate = useNavigate()
  const logOut = (event) => {
    event.preventDefault()
    navigate('/', {
      replace: true
    })
  }
  return (
    <header>
      <div className="burger-button" onClick={()=>{console.log("holas")}}/>
      <button className="logout" onClick={(event) => logOut(event)} >Log Out</button>
    </header>
  )
}
