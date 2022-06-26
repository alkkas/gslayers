import React from 'react'
import * as Styles from './Teams.styles'

export default function RoundStartTeams() {
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
      {Object.entries(teams).map(([title, values]) => {
        return (
          <Styles.TeamItem>
            <Styles.RoundStartTitle>
              <span>{title}</span>
              <div>{values.points}</div>
            </Styles.RoundStartTitle>
            {values.players.map(i => {
              return (
                <Styles.PlayerItem>
                  <span>{i}</span>
                  <div>{i === values.guessing ? 'guessing' : 'explaining'}</div>
                </Styles.PlayerItem>
              )
            })}
          </Styles.TeamItem>
        )
      })}
    </div>
  )
}
