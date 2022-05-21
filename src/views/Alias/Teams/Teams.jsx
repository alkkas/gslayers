import React from 'react'
import * as Styles from './Teams.styles'

export default function Teams() {
  return (
    <Styles.TeamsWrapper>
      <Styles.TeamsTitle>teams</Styles.TeamsTitle>
      <Styles.TeamItem>
        <Styles.TeamTitle placeholder="name..."></Styles.TeamTitle>
        <Styles.PlayerItem>
          <span>player 1</span>
          <Styles.PlayerRemove />
        </Styles.PlayerItem>
        <Styles.PlayerItem>
          <span>player 1</span>
          <Styles.PlayerRemove />
        </Styles.PlayerItem>
      </Styles.TeamItem>
      <Styles.TeamItem>
        <Styles.TeamTitle placeholder="name..."></Styles.TeamTitle>
        <Styles.PlayerItem>
          <span>player 1</span>
          <Styles.PlayerRemove />
        </Styles.PlayerItem>
        <Styles.PlayerItem empty>
          <span>player 1</span>
          <Styles.PlayerJoin />
        </Styles.PlayerItem>
      </Styles.TeamItem>
      <Styles.AddTeam>add</Styles.AddTeam>
      <Styles.AvailablePlayers>
        <Styles.PlayersTitle>players</Styles.PlayersTitle>
        <Styles.PlayersItem> player 1</Styles.PlayersItem>
        <Styles.PlayersItem> player 1</Styles.PlayersItem>
      </Styles.AvailablePlayers>
    </Styles.TeamsWrapper>
  )
}
