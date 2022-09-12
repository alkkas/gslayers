import React from 'react'
import * as Styles from './Player.styles'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { AliasUiContainer } from '@components/common/common.styles'
import { useTranslation } from 'react-i18next'
import { useGetPreGameDataQuery } from '@store/api/apiSlice'
import { modeType } from '@models/alias.model'
const PlayerTeams = enhancedTeams(PreGameTeams)

export default function PlayerUi(): JSX.Element {
  const { data } = useGetPreGameDataQuery()
  const settings = data.settings
  const { t } = useTranslation()

  const mods: modeType = {
    easy: t('easy'),
    medium: t('medium'),
    hard: t('hard'),
  }

  return (
    <AliasUiContainer>
      <Styles.infoWrapper>
        <Styles.InfoContainer color="orange">
          <h2>{t('points')}</h2>
          <span>{settings.points}</span>
        </Styles.InfoContainer>
        <Styles.InfoContainer color="red">
          <h2>{t('time')}</h2>
          <span>{settings.time}</span>
        </Styles.InfoContainer>
      </Styles.infoWrapper>

      <Styles.InfoContainer color="orange">
        <h2>{t('mode')}</h2>
        <span>{mods[settings.mode]}</span>
      </Styles.InfoContainer>
      <PlayerTeams />
    </AliasUiContainer>
  )
}
