import React from 'react'
import './Sidebar.css'
import { Button } from './components/Button'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

export const Sidebar = ({ displayValue }) => {
  const auth = useAuthUser()
  return (
    <div className="sidebar">
      <div className="side-image" />
      <div className="name-app">
        <p>{auth.user}</p>
      </div>
      <div className="buttons">
        <Button name={"Find Users"} uri={"/users"} />
        <Button name={"Others"} uri={"/others"} />
      </div>
    </div>
  )
}
