import React from 'react'
import {
  teamNameChange,
  teamLeave,
  teamJoin,
  deleteTeam,
} from '@store/api/actions'
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
import {
  useGetPreGameDataQuery,
  useSendDataMutation,
} from '@store/api/apiSlice'
import { teamType } from '@models/alias.model'

export default function TeamsAdmin() {
  const [sendData] = useSendDataMutation()
  const { data } = useGetPreGameDataQuery()
  const teams = data.teams
  const admin = data.admin
  const players = data.players
  const playerId = data.currentPlayer
  const currentPlayerObj = players.find(i => i.id === playerId)

  const { t } = useTranslation()

  function TeamTitleChange(team: teamType, value: string) {
    if (admin || currentPlayerObj.team === team.id) {
      sendData(teamNameChange({ id: team.id, value }))
    }
  }

  return (
    <TeamItems>
      {teams.map((item, index) => {
        return (
          <TeamItem key={item.id}>
            <TeamHeader>
              <TeamTitle
                value={item.name}
                placeholder={`${t('teamN')}...`}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  TeamTitleChange(item, event.target.value)
                }
              />
              {admin ||
              Object.values(item.players).every(value => value === null) ? (
                <StyledCanWrapper onClick={() => sendData(deleteTeam(item.id))}>
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
                      onClick={() =>
                        sendData(teamJoin({ playerId: id, teamId: item.id }))
                      }
                    />
                  </PlayerItem>
                ) : (
                  <PlayerItem>
                    <span>{players.find(item => item.id === id)?.name}</span>
                    {admin === playerId || playerId === id ? (
                      <PlayerRemove
                        onClick={() => {
                          sendData(teamLeave({ playerId: id, teamId: item.id }))
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
