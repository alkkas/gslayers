import React from 'react'
import { MenuBurgerContent, MenuBurgerWrapper } from './Header.styles'

export default function MenuBurger({ toggle, isOpen }) {
  function handleClick() {
    console.log('click')
    toggle()
  }
  return (
    <MenuBurgerWrapper onClick={handleClick}>
      <MenuBurgerContent open={isOpen}></MenuBurgerContent>
    </MenuBurgerWrapper>
  )
}
