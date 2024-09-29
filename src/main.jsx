import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import { CookieManagerApp } from './CookieManagerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <CookieManagerApp />
    </BrowserRouter>
  </StrictMode>,
)
