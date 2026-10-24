import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import App from './ThemeContext/App'
// import App from './reducer/App'
// import App from './optimisation/App'
import App from './router-intro/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
