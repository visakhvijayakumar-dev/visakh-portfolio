import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#171717',
          color: '#ffffff',
          border: '1px solid #404040',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        },
        success: {
          style: {
            background: '#065f46',
            color: '#ffffff',
          },
        },
        error: {
          style: {
            background: '#dc2626',
            color: '#ffffff',
          },
        },
      }}
    />
  </React.StrictMode>,
)