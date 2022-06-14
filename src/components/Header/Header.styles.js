import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  breakpoints,
  colors,
  Container,
  fontSizes,
} from '../common/common.styles'
import { Link } from 'react-router-dom'
export const HeaderWrapper = styled(Container)`
  position: fixed;
  z-index: 10;
`
export const MobileMenuWrapper = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
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
    background-color: ${colors.white};
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

  @media screen and (max-width: ${breakpoints.tablet}) {
    & > * {
      margin: 5px 0;
    }
    margin-top: 75px;
    flex-direction: column;
  }
`
export const MenuItem = styled(Link)`
  margin: 10px 0;
  font-weight: 700;
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  text-decoration: none;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: ${fontSizes.l};
  }
`
export const MenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.gray};
  position: absolute;
  z-index: -1;
  left: 100%;
  top: 0;
  opacity: 0.4;
`

export const MenuButton = styled(MenuItem)`
  position: relative;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background-color: ${colors.white};
    position: absolute;
    right: -30px;
    border-radius: 3px;
    transform: ${props => (props.open ? 'rotate(-35deg)' : 'rotate(35deg)')}
      translateY(-50%);
    top: 50%;
    transition: 0.2s ease all;
  }
  &::after {
    right: -45px;
    transform: ${props => (props.open ? 'rotate(35deg)' : 'rotate(-35deg)')}
      translateY(-50%);
  }
`
export const MenuAccordionLine = styled.div`
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: calc(100% - 15px);
  background-color: ${colors.white};
`
export const SubMenuItem = styled(Link)`
  padding: 5px;
  color: ${colors.white};
  font-size: ${fontSizes.m};
  position: relative;
  text-decoration: none;
  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 2px;
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${colors.white};
  }
`
export const Creds = styled.a`
  margin: 10px 0;
  font-weight: 700;
  color: ${colors.white};
  font-size: ${fontSizes.sm};
  text-decoration: none;
  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: ${fontSizes.l};
  }
`
export const SubMenuItems = styled(motion.ul)`
  position: relative;
  margin-left: 30px;
`
export const MenuAccordionWrapper = styled(motion.li)``
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
