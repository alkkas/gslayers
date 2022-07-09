import styled from 'styled-components'
import {
  colors,
  fontSizes,
  Container,
  breakpoints,
  Button,
} from '@components/common/common.styles'
import { keyframes } from 'styled-components'

export const EditContainer = styled.article`
  padding: 25px;
  margin: 15px 0;
  border-radius: 5px;
  background-color: ${props => colors[props.color]};
  color: ${colors.white};
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-size: ${fontSizes.l};
    text-transform: uppercase;
    font-weight: 700;
  }
`
export const Mode = styled(Button)`
  flex-grow: 1;

  padding: 5px 0;

  font-size: ${fontSizes.m};
  font-weight: ${props => (props.active ? 700 : 400)};
  background-color: ${props => colors[props.active ? 'red' : 'purp']};
  box-shadow: ${props =>
    props.active ? '2px 2px 10px rgba(0, 0, 0, 0.25)' : null};
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 105px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  & > * {
    width: 31.33%;
  }
  input {
    width: 38.33%;

    padding: 5px 5px;
    border: 0px;
    text-align: center;
    color: ${colors.white};
    font-size: 16px;
    background-color: ${colors.purp};
  }
`
export const AdminGroup = styled.div`
  @media screen and (min-width: 572px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    & > * {
      flex-grow: 1;
    }
  }
`

const copyAnimation = keyframes`
0% {opacity: 0;}
10% {opacity: 1;}
90% { opacity: 1;}
100% {opacity: 0;}
`

export const LinkField = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  position: relative;
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 60%;
    margin: 0 auto 60px;
  }
  &::before {
    content: '${props => props.copy}';
    text-align: center;
    color: ${colors.white};
    display: inline-block;
    width: 100%;
    padding: 3px 0;
    background: ${colors.orange};
    border-radius: 0 0 5px 5px;
    font-size: 13px;
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    opacity: 0;

    animation-name: ${props => (props.animate ? copyAnimation : 'null')};
    animation-duration: 2.5s;
    animation-iteration-count: 1;
  }
  input {
    border-radius: 5px 0 0 0;
    flex-grow: 1;
    font-size: ${fontSizes.l};
    border: 2px solid ${colors.red};
    background: transparent;
    color: ${colors.white};
    padding: 3px 0 3px 10px;
  }
  button {
    border-radius: 0 5px 0 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    width: 50px;
    height: 50px;
    background-color: ${colors.red};
    transition: 0.2s ease all;
    &:hover {
      transform: translate(3px, -3px);
    }
    &:active {
      transform: translate(0, 0);
    }
    div {
      width: 20px;
      height: 20px;
    }
  }
`
export const MinusButton = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 5px 0 0 5px;

  background-color: ${colors.white};
  transition: 0.2s ease all;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 2px;
    background-color: ${colors.purp};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
export const PlusButton = styled(MinusButton)`
  border-radius: 0 5px 5px 0;

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`
