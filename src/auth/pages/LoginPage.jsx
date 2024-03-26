import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { useFetch } from '../../hooks'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import { AlertModal } from '../../alert/pages/AlertModal'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'


export const LoginPage = () => {
  const isAuthenticated = useIsAuthenticated()
  const url = import.meta.env.VITE_COW_SSO_URL;
  const [body, setBody] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState({});
  const navigate = useNavigate()
  const signIn = useSignIn();
  const { data, loading, error } = useFetch(url, body);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard',
        {
          replace: true
        });
    }
  }, [isAuthenticated])


  useEffect(() => {
    if (data) {
      if (data.token && data.token.length > 0) {
        signIn({
          auth: {
            token: data.token
          },
          userState: { user: body.user }
        })
        navigate('/dashboard',
          {
            replace: true
          });
      }
      if (data.code === 500) {
        setMessage({
          type: 'error',
          message: data.message
        })
        setIsModalOpen(true)
      }
    }
  }, [data])

  const onLogin = (event) => {
    event.preventDefault()
    setBody({
      user: event.target.username.value,
      password: event.target.password.value
    })
  };

  const closeAlertModal = () => {
    setIsModalOpen(false)

  }

  return (
    <form className="form-login" onSubmit={(event) => onLogin(event)}>
      <div className="form-image" />
      <input className="form-items" type="text" id="username" placeholder="User" autoComplete="username" required />
      <input className="form-items" type="password" id="password" placeholder="Password" autoComplete="current-password" required />
      <button className="form-items form-button">Login</button>
      <AlertModal
        isOpen={isModalOpen}
        handleClose={() => { closeAlertModal() }}
        type={message.type || 'error'}
        message={message.message || 'An error has occurred'}
      />
    </form>
  )
}


