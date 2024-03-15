import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DashboardPage } from '../interface/page/DashboardPage'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'

export const CowRouter = () => {

  const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <AuthProvider store={store}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<AuthOutlet fallbackPath='/' />}>
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Route>
      </Routes>
    </AuthProvider >
  )
}
