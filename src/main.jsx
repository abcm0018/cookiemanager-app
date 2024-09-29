import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { CookieManagerApp } from './CookieManagerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CookieManagerApp />
  </StrictMode>,
)
