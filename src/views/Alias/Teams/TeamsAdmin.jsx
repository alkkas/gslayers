import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectAllPlayers,
  teamNameChange,
  teamLeave,
  teamJoin,
  selectPlayer,
  deleteTeam,
} from '@store/alias/mainSlice'
import {
  PlayerItem,
  PlayerJoin,
  PlayerRemove,
  TeamItem,
  TeamTitle,
  TeamItems,
  TeamHeader,
  StyledCan,
  StyledCanWrapper,
} from './Teams.styles'
import { useTranslation } from 'react-i18next'

export default function TeamsAdmin() {
  const teams = useSelector(state => state.alias.teams)
  const admin = useSelector(state => state.alias.admin)
  const players = useSelector(selectAllPlayers)
  const playerId = useSelector(state => state.alias.currentPlayer)
  const playerTeam = players.find(i => i.id === playerId)
  const currentPlayer = useSelector(state => selectPlayer(state, playerId))
  const dispatch = useDispatch()
  const { t } = useTranslation()
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
            <TeamHeader>
              <TeamTitle
                value={item.name}
                placeholder={`${t('teamN')}...`}
                onChange={event => TeamTitleChange(item, index, event)}
              />
              {admin ||
              Object.values(item.players).every(value => value === null) ? (
                <StyledCanWrapper
                  onClick={() => dispatch(deleteTeam({ id: item.id }))}
                >
                  <StyledCan />
                </StyledCanWrapper>
              ) : null}
            </TeamHeader>

            <section>
              {Object.values(item.players).map((id, playerIndex) => {
                return id === null ? (
                  <PlayerItem empty={true}>
                    <span>{t('empty')}</span>

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
                    <span>{players.find(item => item.id === id)?.name}</span>
                    {admin === playerId || playerId === id ? (
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
