import styled, { css, keyframes } from 'styled-components'
import {
  breakpoints,
  colors,
  fontSizes,
} from '@components/common/common.styles'
import { Link } from 'react-router-dom'
import { Menu as MenuInner } from '@szhsin/react-menu'

import {
  menuSelector,
  menuItemSelector,
  menuDividerSelector,
} from '@szhsin/react-menu/style-utils'

const itemCss = css`
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  font-weight: 700;
`
export const Menu = styled(MenuInner)`
  ${menuSelector.name} {
    display: block;
    background-color: ${colors.white};
    transition: 0.2s ease all;
    border-radius: 5px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
  }

  ${menuSelector.stateOpening} {
    opacity: 1;
  }

  ${menuSelector.stateClosing} {
    opacity: 0;
  }

  ${menuItemSelector.name} {
    padding: 0;
  }
`
export const MenuItemLink = styled(Link)`
  display: block;
  padding: 10px 20px;
  ${itemCss}
  width: 100%;
  color: ${colors.green};
  font-size: ${fontSizes.esm};
  text-transform: uppercase;
`
export const Wrapper = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.green};
  padding: 15px 0;

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const Items = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`

export const Item = styled(Link)`
  ${itemCss}
`

export const Creds = styled.a`
  ${itemCss}
  cursor: pointer;
`

export const SubItem = styled.a`
  ${itemCss}
  cursor: pointer;
  position: relative;
  padding-right: 40px;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
    right: 16px;
    border-radius: 3px;
    transform: ${props => (props.open ? 'rotate(-35deg)' : 'rotate(35deg)')}
      translateY(-50%);
    top: 50%;
    transition: 0.2s ease all;
  }
  &::after {
    right: 0px;
    transform: ${props => (props.open ? 'rotate(35deg)' : 'rotate(-35deg)')}
      translateY(-50%);
  }
`
