import React from 'react'
import { Container } from '@components/common/common.styles'
import * as Styles from './MenuDesktop.styles'
import * as Scroll from 'react-scroll'

import { MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

export default function MenuDesktop() {
  return (
    <Styles.Wrapper>
      <Styles.MenuContainer>
        <Styles.Items>
          <ul>
            <li>
              <Styles.Item to="/">HOME</Styles.Item>
            </li>
            <li>
              <Styles.Menu
                menuButton={({ open }) => (
                  <Styles.SubItem open={open}>OUR GAMES</Styles.SubItem>
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
                CREDENTIALS
              </Styles.Creds>
            </li>
          </ul>
        </Styles.Items>
      </Styles.MenuContainer>
    </Styles.Wrapper>
  )
}
