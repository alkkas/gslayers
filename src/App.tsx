import * as React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Main from './Main'
import GlobalCss from './Global.css'
import { Routes, Route } from 'react-router-dom'
import { Home, Alias, Jeopardy } from '@views/index'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />

        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="alias" element={<Alias />} />
            <Route path="jeopardy" element={<Jeopardy />} />
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
