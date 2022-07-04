import React from 'react'
import * as Styles from './Teams.styles'
import { useSelector } from 'react-redux'
import { selectAllPlayers } from '@store/alias/aliasSlice'

export default function RoundStartTeams() {
  const teams = useSelector(state => state.alias.teams)
  const players = useSelector(selectAllPlayers)

  return (
    <div style={{ marginTop: 0 }}>
      {teams.map(values => {
        return (
          <Styles.TeamItem>
            <Styles.RoundStartTitle>
              <span>{values.name}</span>
              <div>{values.points}</div>
            </Styles.RoundStartTitle>
            {Object.entries(values.players).map(([i, id]) => {
              const player = players.find(item => item.id === id)
              return (
                <Styles.PlayerItem>
                  {/* remove "?" opeartor later */}
                  <span>{player?.name}</span>
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
