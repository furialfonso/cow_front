import React from 'react'
import ReactDOM from 'react-dom/client'
import CowApp from './CowApp.jsx'
import './main.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-screen h-screen bg-body">
        <div className="w-full h-full pt-12 flex justify-center">
          <CowApp />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
