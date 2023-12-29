import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DashboardPage } from '../interface/page/DashboardPage'


export const CowRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<DashboardPage />} />
    </Routes>
  )
}
