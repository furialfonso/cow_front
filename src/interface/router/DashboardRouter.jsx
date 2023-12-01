import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../page/DashboardPage'

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  )
}
