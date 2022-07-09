import React from 'react'
import * as Styles from './Player.styles'
import Teams from '../Teams/Teams'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { useSelector } from 'react-redux'
import { AliasUiContainer } from '@components/common/common.styles'
import { useTranslation } from 'react-i18next'
const PlayerTeams = enhancedTeams(PreGameTeams)

export default function PlayerUi() {
  const settings = useSelector(state => state.alias.settings)
  const { t } = useTranslation()

  const mods = { easy: t('easy'), medium: t('medium'), hard: t('hard') }

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
