import React from 'react'
import { Header } from '../components/header'
import { Content } from '../components/content'
import { Footer } from '../components/footer'
import './DashboardPage.css'
import { Sidebar } from '../components'


export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  )
}
