import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { BrowserRouter } from "react-router-dom";
import { CowRouter } from './router/CowRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CowRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
