import React from 'react'
import { MenuBurgerWrapper } from './Header.styles'

export default function MenuBurger({ toggle, isOpen }) {
  return <MenuBurgerWrapper onClick={toggle} open={isOpen}></MenuBurgerWrapper>
}
