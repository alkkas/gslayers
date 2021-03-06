import React from 'react'
import { Container } from '@components/common/common.styles'
import * as Styles from './MenuDesktop.styles'
import * as Scroll from 'react-scroll'

import { MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import ChangeLang from '../ChangeLang/ChangeLang'
import { useTranslation } from 'react-i18next'

export default function MenuDesktop() {
  const { t } = useTranslation()
  return (
    <Styles.Wrapper>
      <Styles.MenuContainer>
        <Styles.Items>
          <ul>
            <li>
              <Styles.Item to="/">{t('home')}</Styles.Item>
            </li>
            <li>
              <Styles.Menu
                menuButton={({ open }) => (
                  <Styles.SubItem open={open}>{t('our games')}</Styles.SubItem>
                )}
                transition
              >
                <MenuItem>
                  <Styles.MenuItemLink to="/alias">alias</Styles.MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <Styles.MenuItemLink to="/jeopardy">
                    jeopardy
                  </Styles.MenuItemLink>
                </MenuItem>
              </Styles.Menu>
            </li>
            <li>
              <Styles.Creds onClick={Scroll.animateScroll.scrollToBottom}>
                {t('footer')}
              </Styles.Creds>
            </li>
          </ul>
        </Styles.Items>
        <ChangeLang desktop={true} />
      </Styles.MenuContainer>
    </Styles.Wrapper>
  )
}
