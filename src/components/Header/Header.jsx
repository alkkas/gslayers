import React from 'react'
import { useCycle } from 'framer-motion'
import { HeaderWrapper } from './Header.styles'
import Menu from './Menu'
import MenuBurger from './MenuBurger'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <HeaderWrapper as={motion.header} animate={isOpen ? 'open' : 'closed'}>
      <MenuBurger toggle={() => toggleOpen()} isOpen={isOpen} />
      <Menu />
    </HeaderWrapper>
  )
}
