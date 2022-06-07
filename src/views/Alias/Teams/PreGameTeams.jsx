import React from 'react'
import * as Styles from './Teams.styles'

export default function PreGameTeams({ admin }) {
  const teams = {
    winners: {
      points: 30,
      players: ['player1', 'player2'],
      guessing: 'player1',
      explaining: 'player2',
    },
    losers: {
      points: 20,
      players: ['player1', 'player2'],
      guessing: 'player1',
      explaining: 'player2',
    },
  }
  return (
    <div>
      {admin
        ? Object.entries(teams).map(([name, values]) => {
            return (
              <Styles.TeamItem>
                <Styles.TeamTitle value={name} placeholder="name..." />
                {values.players.map(i => {
                  return (
                    <Styles.PlayerItem>
                      <span>{i}</span>
                      <Styles.PlayerRemove />
                    </Styles.PlayerItem>
                  )
                })}
              </Styles.TeamItem>
            )
          })
        : Object.entries(teams).map(([name, values]) => {
            return (
              <Styles.TeamItem>
                <Styles.TeamTitle value={name} placeholder="name..." />
                {values.players.map(i => {
                  return (
                    <Styles.PlayerItem>
                      <span>{i}</span>
                    </Styles.PlayerItem>
                  )
                })}
              </Styles.TeamItem>
            )
          })}
      {admin ? <Styles.AddTeam>add</Styles.AddTeam> : null}
      <Styles.PlayersTitle>players:</Styles.PlayersTitle>
      <Styles.AvailablePlayers>
        <Styles.PlayersItem>player 1</Styles.PlayersItem>
        <Styles.PlayersItem>player 2</Styles.PlayersItem>
      </Styles.AvailablePlayers>
    </div>
  )
}
