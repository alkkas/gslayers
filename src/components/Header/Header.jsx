import React, { useEffect, useRef } from 'react'
import { useCycle } from 'framer-motion'
import { HeaderWrapper } from './Header.styles'
import Menu from './Menu'
import MenuBurger from './MenuBurger'
import MenuDesktop from './MenuDesktop'
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useSizes } from '@utils/hooks/useSizes'
import { breakpoints } from '../common/common.styles'

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { width } = useSizes()
  const value = width > parseFloat(breakpoints.tablet)

  useEffect(() => {
    if (isOpen) {
      //when custom prop changes framer motion is not updating
      //component for now i dont know how to fix this
      //and i dont think taht it's necessary so I just add
      //this cond to mobile menu when user resizes window
      if (value) toggleOpen()
      disableBodyScroll(containerRef.current)
    } else {
      enableBodyScroll(containerRef.current)
    }
  })

  return (
    <HeaderWrapper
      ref={containerRef}
      as={motion.header}
      animate={isOpen ? 'open' : 'closed'}
    >
      {value ? (
        <MenuDesktop />
      ) : (
        <>
          <MenuBurger toggle={() => toggleOpen()} isOpen={isOpen} />
          <Menu toggle={toggleOpen} />
        </>
      )}
    </HeaderWrapper>
  )
}
