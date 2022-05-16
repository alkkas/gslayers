import React, { useRef, useEffect } from 'react'
import { useDimensions, setRefsDimensions } from '@utils/hooks/useDimensions'
import { motion } from 'framer-motion'
import {
  MenuWrapper,
  MenuItems,
  MenuItem,
  MenuBackground,
} from './Header.styles'
import MenuAccordion from './MenuAccordion'
import { childVariants } from '@utils/animation/MenuAnimationVariants'

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
    clipPath: 'circle(25px at 33px 27px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
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

export default function Menu() {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <MenuWrapper
      custom={height}
      initial={false}
      variants={menuVariants}
      ref={containerRef}
    >
      <MenuBackground />
      <nav>
        <MenuItems variants={childrenDelay}>
          <MenuItem variants={childVariants}>HOME</MenuItem>
          <MenuAccordion />
          <MenuItem variants={childVariants}>CREDENTIALS</MenuItem>
        </MenuItems>
      </nav>
    </MenuWrapper>
  )
}
