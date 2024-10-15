import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
