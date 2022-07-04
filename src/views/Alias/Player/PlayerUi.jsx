import React from 'react'
import * as Styles from './Player.styles'
import Teams from '../Teams/Teams'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { useSelector } from 'react-redux'
import { AliasUiContainer } from '@components/common/common.styles'
const PlayerTeams = enhancedTeams(PreGameTeams)

export default function PlayerUi() {
  const settings = useSelector(state => state.alias.settings)
  return (
    <AliasUiContainer>
      <Styles.infoWrapper>
        <Styles.InfoContainer color="orange">
          <h2>points</h2>
          <span>{settings.points}</span>
        </Styles.InfoContainer>
        <Styles.InfoContainer color="red">
          <h2>time</h2>
          <span>{settings.time}s</span>
        </Styles.InfoContainer>
      </Styles.infoWrapper>

      <Styles.InfoContainer color="orange">
        <h2>mode</h2>
        <span>{settings.mode}</span>
      </Styles.InfoContainer>
      <PlayerTeams />
    </AliasUiContainer>
  )
}
