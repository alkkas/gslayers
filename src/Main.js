import React, { useEffect, useState } from 'react'
import { MainWrapper } from './App.styles'
import { Header, Footer } from '@components'
// import { hot } from 'react-hot-loader/root'
import { Outlet, useLocation } from 'react-router-dom'
import { ReactSession } from 'react-client-session'

function Main() {
  ReactSession.setStoreType('localStorage')

  const location = useLocation()
  const [backgroud, setBackground] = useState('white')

  useEffect(() => {
    if (location.pathname == '/alias') {
      setBackground('purp')
    } else {
      setBackground('white')
    }
  })

  return (
    <MainWrapper background={backgroud}>
      <Header />
      <Outlet />
      <Footer />
    </MainWrapper>
  )
}

export default Main
