import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { initSelfPing } from './lib/selfping';
import App from './App.tsx'

// Keep the hosting/server alive
initSelfPing();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
