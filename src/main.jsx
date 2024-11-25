import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from "./routes/routes.jsx"
import { BrowserRouter } from 'react-router-dom'
import CreateGlobalStyles from "./styles/globalStyles.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      < Router/>
    </BrowserRouter>
    <CreateGlobalStyles/>
  </StrictMode>,
)
