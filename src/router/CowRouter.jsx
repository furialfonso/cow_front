import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DashboardRouter } from '../interface/router/DashboardRouter'

export const CowRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/*" element={<DashboardRouter />} />
    </Routes>
  )
}
