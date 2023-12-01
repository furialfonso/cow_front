import React from 'react'
import './LoginPage.css'

export const LoginPage = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-y-4 shadow-lg shadow-primary-950 w-1/3 h-3/4 bg-gradient-to-r from-primary-950 to-primary-800  rounded-xl" action="">
      <div className="w-4/6 h-2/4">
        <img src="/src/assets/cow.svg" className="w-full h-full object-cover"></img>
      </div>
      <input type="text" id="username" placeholder="User" className="w-4/6 h-12 rounded" />
      <input type="password" id="password" placeholder="Password" className="w-4/6 h-12 rounded" />
      <button className="bg-secondary w-4/6 h-12 rounded">Login</button>
    </form>
  )
}


