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
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <MenuAccordionWrapper variants={childVariants}>
      <motion.nav animate={isOpen ? 'open' : 'closed'} intial={false}>
        <MenuButton as={motion.span} onClick={setOpen} open={isOpen}>
          {t('our games')}
        </MenuButton>
        <SubMenuItems variants={SubMenuVariants}>
          <MenuAccordionLine />
          <li>
            <SubMenuItem to="/alias">ALIAS</SubMenuItem>
          </li>
          <li>
            <SubMenuItem to="/jeopardy">JEOPARDY</SubMenuItem>
          </li>
        </SubMenuItems>
      </motion.nav>
    </MenuAccordionWrapper>
  )
}
