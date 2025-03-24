import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Skill from './skill'
import 'bootstrap/dist/css/bootstrap.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Skill />
  </StrictMode>,
)
