import React, { useState } from 'react'
import { Header } from '../components/header'
import { MfeRouter } from '../components/MfeRouter'
import { Footer } from '../components/footer'
import './DashboardPage.css'
import { Sidebar } from '../components'


export const DashboardPage = () => {
  const [showSideBar, setShowSideBar] = useState()
  return (
    <div className="dashboard">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Sidebar displayValue={showSideBar} />
      <div className="content">
        <MfeRouter />
      </div>
      <Footer />
    </div>
  )
}
