import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalCss from './Global.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Alias, Jeopardy } from '@views'

ReactDOM.render(
  <BrowserRouter>
    <GlobalCss />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="alias" element={<Alias />} />
        <Route path="jeopardy" element={<Jeopardy />} />
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
