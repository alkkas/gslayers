import React from 'react'
import {
  MenuAccordionWrapper,
  MenuButton,
  SubMenuItems,
  SubMenuItem,
  MenuAccordionLine,
} from './Header.styles'
import { childVariants } from '@utils/animation/MenuAnimationVariants'
import { motion, useCycle } from 'framer-motion'

const SubMenuVariants = {
  open: {
    height: 'auto',
    overflow: 'unset',
  },
  closed: {
    height: 0,
    overflow: 'hidden',
  },
}

export default function MenuAccordion() {
  const [isOpen, setOpen] = useCycle(false, true)

  return (
    <MenuAccordionWrapper variants={childVariants}>
      <motion.nav animate={isOpen ? 'open' : 'closed'} intial={false}>
        <MenuButton as={motion.span} onClick={setOpen} open={isOpen}>
          OUR GAMES
        </MenuButton>
        <SubMenuItems variants={SubMenuVariants}>
          <MenuAccordionLine />

          <SubMenuItem>ALIAS</SubMenuItem>
          <SubMenuItem>JEOPARDY</SubMenuItem>
        </SubMenuItems>
      </motion.nav>
    </MenuAccordionWrapper>
  )
}
