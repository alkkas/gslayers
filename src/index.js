import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalCss from './Global.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Alias, Jeopardy } from '@views'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './i18nextConf'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="alias" element={<Alias />} />
            <Route path="jeopardy" element={<Jeopardy />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
