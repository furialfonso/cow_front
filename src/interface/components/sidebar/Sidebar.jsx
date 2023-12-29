import React from 'react'
import './Sidebar.css'
import { Button } from './components/Button'

export const Sidebar = ({ displayValue }) => {
  return (
    <div className="sidebar">
      <div className="side-image" />
      <div className="name-app">
        <p>Cow App</p>
      </div>
      <div className="buttons">
        <Button name={"Find Users"} uri={"/users"} />
        <Button name={"Others"} uri={"/others"} />
      </div>
    </div>
  )
}
