import React from 'react'
import * as Styles from './Teams.styles'
import { useTranslation } from 'react-i18next'

export default function enhancedTeams(Component) {
  return function Teams(props) {
    const { t } = useTranslation()
    return (
      <Styles.TeamsWrapper>
        <Styles.TeamsTitle>{t('teams')}</Styles.TeamsTitle>
        <Component {...props} />
      </Styles.TeamsWrapper>
    )
  }
}
