import React, { useEffect } from 'react'
import * as Styles from './Teams.styles'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPlayers } from '@store/alias/aliasSlice'
import { random } from 'lodash'
import {
  statusChange,
  setWinner,
  setCurrentTeam,
  reverseOrder,
} from '@store/alias/aliasSlice'

export default function RoundStartTeams() {
  const teams = useSelector(state => state.alias.teams)
  const players = useSelector(selectAllPlayers)
  const dispatch = useDispatch()
  const currentTeamId = useSelector(state => state.alias.currentTeam)
  const currentTeam = teams.find(team => team.id === currentTeamId) || teams[0]
  const currentPlayer = useSelector(state => state.alias.currentPlayer)
  const explainingPlayer = currentTeam.players[currentTeam.explaining]

  return (
    <Styles.RoundStartTeams>
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
                  <span>{player?.name}</span>
                  {values.id === currentTeamId ? (
                    <div>
                      {Number(i) === values.guessing
                        ? 'guessing'
                        : 'explaining'}
                    </div>
                  ) : null}
                </Styles.PlayerItem>
              )
            })}
          </Styles.TeamItem>
        )
      })}
    </Styles.RoundStartTeams>
  )
}
