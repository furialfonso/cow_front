import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

export const Button = ({ name, uri }) => {
  const navigate = useNavigate()
  const action = (event) => {
    event.preventDefault()
    navigate("/dashboard"+uri)
  }
  return (
    <button className="button-bar" onClick={(event) => action(event)} >{name}</button>
  )
}
