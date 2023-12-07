import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
const logOut = (event) => {
    event.preventDefault()
  navigate('/', {
      replace: true
    })
  }
  return (
    <header>
      <button className="logout" onClick={(event)=>logOut(event)} >Log Out</button>
    </header>
  )
}
