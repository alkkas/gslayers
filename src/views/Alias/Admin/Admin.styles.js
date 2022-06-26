import styled from 'styled-components'
import {
  colors,
  fontSizes,
  Container,
  breakpoints,
  Button,
} from '@components/common/common.styles'

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
export const LinkField = styled.section`
  input {
  }
  button {
    display: block;
    width: 50px;
    height: 50px;
    background-color: ${colors.red};
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
export const GenerateLinkBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${colors.red};
  font-size: ${fontSizes.l};
  text-transform: uppercase;
  color: ${colors.white};
  padding: 15px 0;
  font-weight: 700;
  width: 100%;
  margin-bottom: 80px;
  position: relative;
  &::before {
    content: 'lobby created & link copied';
    display: block;
    width: 100%;
    padding: 2px 0;
    background-color: ${colors.orange};
    color: ${colors.red};
    font-size: ${fontSizes.esm};
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    border-radius: 0 0 3px 3px;
  }
  img {
    margin-top: -3px;
  }
`
