import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="side-image" />
      <div className="name-app">
        <p>Cow App</p>
      </div>
      <div className="buttons">
        <button className="button-bar">button1</button>
        <button className="button-bar">button2</button>
        <button className="button-bar">button3</button>
        <button className="button-bar">button4</button>
      </div>
    </div>
  )
}
