import React from 'react'
import { Header } from '../components/header'
import { Content } from '../components/Content'
import { Footer } from '../components/footer'
import './DashboardPage.css'


export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
