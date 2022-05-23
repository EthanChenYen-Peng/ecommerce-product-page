import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { GlobalStyle } from './globalStyle'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
