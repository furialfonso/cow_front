import React from 'react'
import ReactDOM from 'react-dom/client'
import CowApp from './CowApp.jsx'
import './main.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="body">
        <div className="body-content">
          <CowApp />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
