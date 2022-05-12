import React from 'react'
import { MenuWrapper, MenuItems, MenuItem } from './Header.styles'

export default function DesktopMenu() {
  return (
    <MenuWrapper>
      <MenuItems>
        <MenuItem>HOME</MenuItem>
        <MenuItem>OUR GAMES</MenuItem>
        <MenuItem>CREDENTIALS</MenuItem>
      </MenuItems>
    </MenuWrapper>
  )
}
