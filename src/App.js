import React from 'react'
import { Wrapper } from '@components/common/common.styles'
import { Home } from '@views'
import { Header } from '@components'

// import { hot } from 'react-hot-loader/root'
// import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
    </Wrapper>
  )
}

export default App
