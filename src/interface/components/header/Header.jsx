import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export const Header = ({showSideBar, setShowSideBar}) => {
  const navigate = useNavigate()

  const logOut = (event) => {
    event.preventDefault()
    navigate('/', {
      replace: true
    })
  }

  const changeState = (event)=>{
    event.preventDefault()
    setShowSideBar(prevValue => prevValue === "none" ? "block" : "none");
    console.log(showSideBar)
  }

  return (
    <header>
      <div className="burger-button" onClick={(event)=>changeState(event)}/>
      <button className="logout" onClick={(event) => logOut(event)} >Log Out</button>
    </header>
  )
}
