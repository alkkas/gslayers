import React, { useRef, useEffect } from 'react'
import { useDimensions, setRefsDimensions } from '@utils/hooks/useDimensions'
import { motion } from 'framer-motion'
import {
  MenuWrapper,
  MenuItems,
  MenuItem,
  MenuBackground,
  Creds,
} from './Header.styles'
import * as Scroll from 'react-scroll'
import MenuAccordion from './MenuAccordion'
import { childVariants } from '@utils/animation/MenuAnimationVariants'
import ChangeLang from './ChangeLang/ChangeLang'

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

export default function Menu({ toggle }) {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  //when user clicks menu button, menu closes
  function handleClick(e) {
    if (e.target.tagName == 'A') {
      toggle(0)
    }
  }

  return (
    <MenuWrapper
      custom={height}
      initial={false}
      variants={menuVariants}
      ref={containerRef}
      onClick={handleClick}
    >
      <MenuBackground />
      <nav>
        <MenuItems variants={childrenDelay}>
          <motion.li variants={childVariants}>
            <MenuItem to="/">HOME</MenuItem>
          </motion.li>
          <MenuAccordion />
          <motion.li variants={childVariants}>
            <Creds onClick={Scroll.animateScroll.scrollToBottom}>
              CREDENTIALS
            </Creds>
          </motion.li>
        </MenuItems>
      </nav>
      <ChangeLang desktop={false} />
    </MenuWrapper>
  )
}
