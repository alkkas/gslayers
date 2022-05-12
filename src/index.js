import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalCss from './Global.css'

ReactDOM.render(
  <BrowserRouter>
    <GlobalCss />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
