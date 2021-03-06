import styled from 'styled-components'
import {
  colors,
  LargeText,
  fontSizes,
  MediumText,
  breakpoints,
  Button,
} from '@components/common/common.styles'
import Can from '@assets/img/trashCan.svg'

export const TeamsWrapper = styled.article`
  margin: 30px 0;
  padding: 20px 30px;
  background-color: ${colors.green};
  border-radius: 5px;
  color: ${colors.white};
`

export const TeamsTitle = styled(LargeText)`
  text-align: center;
  color: ${colors.white};
  text-transform: uppercase;
  margin: 12px 0 19px;
  font-weight: 700;
`

export const TeamItem = styled.div`
  padding: 15px;
  border: 1px solid ${colors.white};
  border-radius: 5px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`
export const TeamItems = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`
export const TeamTitle = styled.input`
  text-align: left;
  color: ${colors.white};
  font-size: ${fontSizes.m};
  border: 0;
  border-bottom: 2px solid ${colors.orange};
  background: none;
  width: 70%;
  display: block;
  &::placeholder {
    color: ${colors.white};
    text-align: left;
    opacity: 0.5;
  }
`
export const PlayerItem = styled.div`
  padding: 5px 11px;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(252, 197, 102, ${props => (props.empty ? 0.5 : 1)});
  margin: 11px 0;
  border-radius: 5px;
  div {
    color: ${colors.red};
  }
  span {
    opacity: ${props => (props.empty ? 0.5 : 1)};
    font-size: ${fontSizes.sm};
  }
`

export const PlayerJoin = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${colors.white};
  position: relative;
  border-radius: 5px;

  cursor: pointer;
  &::before,
  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 13px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${colors.green};
    transform: translate(-50%, -50%) rotate(90deg);
    border-radius: 5px;
  }
  &::after {
    transform: translate(-50%, -50%);
  }
`
export const PlayerRemove = styled(PlayerJoin)`
  &::before,
  &::after {
    background-color: ${colors.red};
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export const AddTeam = styled(Button)`
  display: block;
  font-size: ${fontSizes.sm};
  color: ${colors.white};
  text-transform: uppercase;
  padding: 11px 0;
  font-weight: 700;
  width: 100%;
  background-color: ${colors.purp};
  margin: 0 auto 30px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 50%;
    margin: 15px auto 30px;
  }
`
export const AvailablePlayers = styled.div`
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-item: center;
  }
`

export const PlayersTitle = styled(MediumText)`
  text-align: center;
  margin: 30px 0 10px;
`

export const PlayersItem = styled.div`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  padding: 5px 0;
  width: 100%;
  background-color: ${colors.lightRed};
  margin: 13px 0;
  text-align: center;
  @media screen and (min-width: ${breakpoints.tablet}) {
    margin: 0;
  }
`
export const RoundStartTeams = styled.section`
  margin: 0 0 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, auto));
  gap: 15px;
`
export const RoundStartTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: ${fontSizes.m};
    color: ${colors.white};
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${colors.red};
    width: 30px;
    height: 30px;
    border-radius: 50px;
    background-color: ${colors.white};
  }
`
export const TeamHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`
export const StyledCan = styled(Can)`
  width: 100%;
`
export const StyledCanWrapper = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  width: 23px;
  height: 23px;
`
