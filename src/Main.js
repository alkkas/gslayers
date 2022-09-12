import React, { useEffect, useState } from 'react'
import { MainWrapper } from './App.styles'
import { Header, Footer } from '@components/index'
// import { hot } from 'react-hot-loader/root'
import { Outlet, useLocation } from 'react-router-dom'
import { ReactSession } from 'react-client-session'
import { fetchPlayers } from '@store/alias/mainSlice'
import { useDispatch } from 'react-redux'
function Main() {
  ReactSession.setStoreType('localStorage')

  const location = useLocation()
  const [background, setBackground] = useState('white')
  const dispatch = useDispatch()
  useEffect(() => {
    //dispatch(fetchPlayers())
    if (location.pathname === '/alias') {
      setBackground('purp')
    } else {
      setBackground('white')
    }
  })

  return (
    <MainWrapper background={background}>
      <Header />
      <Outlet />
      <Footer />
    </MainWrapper>
  )
}

export default Main
