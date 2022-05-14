import React, { useRef, useEffect } from 'react'
import { useDimensions } from '@utils/hooks/useDimensions'
import { MenuWrapper, MenuItems, MenuItem } from './Header.styles'

const menuVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 30px 30px)',

    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const childVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}
const childrenDelay = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export default function DesktopMenu() {
  const items = ['HOME', 'OUR GAMES', 'CREDENTIALS']
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <MenuWrapper
      custom={height}
      initial={false}
      variants={menuVariants}
      ref={containerRef}
    >
      <MenuItems variants={childrenDelay}>
        {items.map((i, index) => (
          <MenuItem key={index} variants={childVariants}>
            {i}
          </MenuItem>
        ))}
      </MenuItems>
    </MenuWrapper>
  )
}
