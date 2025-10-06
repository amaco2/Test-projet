import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// createRoot(document.querySelector('.new-react')).render(
//   <StrictMode>
    
//   </StrictMode>
// )
