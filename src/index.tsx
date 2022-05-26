import { render } from 'react-dom'
import React from 'react'
import App from './App'
import { GlobalStyle } from './globalStyle'

render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
)
