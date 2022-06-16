import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAllPlayers,
  teamNameChange,
  teamLeave,
  teamJoin,
  selectPlayer,
} from '@store/alias/aliasSlice'
import {
  PlayerItem,
  PlayerJoin,
  PlayerRemove,
  TeamItem,
  TeamTitle,
  TeamItems,
} from './Teams.styles'

export default function TeamsAdmin() {
  const teams = useSelector(state => state.alias.teams)
  const admin = useSelector(state => state.alias.admin)
  const players = useSelector(selectAllPlayers)
  const playerId = useSelector(state => state.alias.currentPlayer)
  const playerTeam = players.find(i => i.id === playerId)
  const currentPlayer = useSelector(state => selectPlayer(state, playerId))
  const dispatch = useDispatch()

  function TeamTitleChange(team, index, event) {
    if (admin || playerTeam.team === team.id) {
      dispatch(teamNameChange({ index, value: event.target.value }))
    }
  }

  return (
    <TeamItems>
      {teams.map((item, index) => {
        return (
          <TeamItem>
            <TeamTitle
              value={item.name}
              placeholder="team name..."
              onChange={event => TeamTitleChange(item, index, event)}
            />
            <section>
              {Object.values(item.players).map((id, playerIndex) => {
                return id === null ? (
                  <PlayerItem empty={true}>
                    <span>empty</span>

                    <PlayerJoin
                      onClick={() => {
                        if (currentPlayer.team) {
                          let teamIndex = null
                          teams.forEach((item, index) => {
                            if (item.id === currentPlayer.team) {
                              teamIndex = index
                            }
                          })
                          const players = teams[teamIndex].players
                          dispatch(
                            teamLeave({
                              playerIndex:
                                players[0] === currentPlayer.id ? 0 : 1,
                              teamIndex,
                            })
                          )
                        }
                        dispatch(teamJoin({ playerIndex, teamIndex: index }))
                      }}
                    />
                  </PlayerItem>
                ) : (
                  <PlayerItem>
                    <span>{players.find(item => item.id === id).name}</span>
                    {admin || playerId === id ? (
                      <PlayerRemove
                        onClick={() => {
                          dispatch(teamLeave({ playerIndex, teamIndex: index }))
                        }}
                      />
                    ) : null}
                  </PlayerItem>
                )
              })}
            </section>
          </TeamItem>
        )
      })}
    </TeamItems>
  )
}
