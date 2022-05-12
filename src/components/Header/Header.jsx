import React from 'react'
import { Container } from '../common/common.styles'
import { HeaderWrapper } from './Header.styles'
import Menu from './Menu'
import MenuBurger from './MenuBurger'

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuBurger />
      <Menu />
    </HeaderWrapper>
  )
}
