import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPlayers } from '@store/alias/aliasSlice'
import { random } from 'lodash'
import {
  statusChange,
  setWinner,
  setCurrentTeam,
} from '@store/alias/aliasSlice'

export default function RoundStartTeams() {
  const teams = useSelector(state => state.alias.teams)
  const rounds = useSelector(state => state.alias.rounds)
  const points = useSelector(state => state.alias.settings.points)
  const players = useSelector(selectAllPlayers)
  const dispatch = useDispatch()
  const teamsCount = teams.length
  const currentTeam = teams[rounds % teamsCount].id

  useEffect(() => {
    const winners = []
    if (rounds % teamsCount === 0 && rounds !== 0) {
      teams.forEach(i => {
        if (i.points >= points) {
          winners.push(i)
        }
      })
    }
    if (winners.length === 1) {
      dispatch(statusChange('win'))
      dispatch(setWinner(winners[0].id))
    } else {
      dispatch(setCurrentTeam(currentTeam))
    }
  })
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
                  {values.id === currentTeam ? (
                    <div>
                      {i === values.guessing ? 'guessing' : 'explaining'}
                    </div>
                  ) : null}
                </Styles.PlayerItem>
              )
            })}
          </Styles.TeamItem>
        )
      })}
    </div>
  )
}
