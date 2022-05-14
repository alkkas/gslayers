import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  breakpoints,
  colors,
  Container,
  fontSizes,
} from '../common/common.styles'

export const HeaderWrapper = styled(Container)`
  position: fixed;
`

export const MenuBurgerWrapper = styled(motion.div)`
  margin-top: 20px;
  display: block;
  width: 37px;
  height: 13px;
  position: relative;
  z-index: 10;
  &::before,
  &::after {
    transition: 0.3s ease all;

    content: '';
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 5px;
    ${props => (props.open ? 'transform: rotate(45deg) translateY(6px);' : '')}
    transform-origin: center;
    position: absolute;
    background-color: ${props => (props.open ? colors.white : colors.red)};
  }
  &::after {
    bottom: 0;
    ${props => (props.open ? 'transform:rotate(-45deg) translateY(-6px);' : '')}
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const MenuItems = styled(motion.ul)`
  display: flex;
  margin-top: 75px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`
export const MenuItem = styled(motion.li)`
  margin: 10px 0;
  font-weight: 700;
  color: ${colors.white};
  font-size: ${fontSizes.l};
`
export const MenuWrapper = styled(motion.article)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.green};
  padding: 15px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 281px;
    height: 100%;
  }
`
