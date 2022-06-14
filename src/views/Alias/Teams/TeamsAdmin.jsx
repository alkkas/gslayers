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
} from './Teams.styles'

export default function TeamsAdmin() {
  const teams = useSelector(state => state.alias.teams)
  const admin = useSelector(state => state.alias.admin)
  const players = useSelector(selectAllPlayers)
  const playerId = useSelector(state => state.alias.currentPlayer)
  const currentPlayer = useSelector(state => selectPlayer(state, playerId))
  const dispatch = useDispatch()

  function TeamTitleChange(team, index, event) {
    const playerTeam = players.find(i => i.id === playerId)
    if (admin || playerTeam.team === team.id) {
      dispatch(teamNameChange({ index, value: event.target.value }))
    }
  }

  return (
    <>
      {teams.map((item, index) => {
        return (
          <TeamItem>
            <TeamTitle
              value={item.name}
              onChange={event => TeamTitleChange(item, index, event)}
            />
            <section>
              {Object.values(item.players).map((id, playerIndex) => {
                return id === null ? (
                  <PlayerItem empty={true}>
                    <span>empty</span>
                    {currentPlayer.status === 'available' ? (
                      <PlayerJoin
                        onClick={() =>
                          dispatch(teamJoin({ playerIndex, teamIndex: index }))
                        }
                      />
                    ) : null}
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
    </>
  )
}
