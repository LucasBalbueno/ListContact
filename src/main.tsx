import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { GlobalStyle } from './assets/styles/Global.ts'
import { ModalProvider } from './context/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <GlobalStyle />
      <App />
    </ModalProvider>
  </StrictMode>,
)
