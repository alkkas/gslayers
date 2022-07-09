import React from 'react'
import { useTranslation } from 'react-i18next'
import * as Styles from './Jeopardy.styles'

export default function Jeopardy() {
  const { t } = useTranslation()
  return (
    <Styles.JWrapper>
      <Styles.JTitle>
        <span>{t('coming')}</span> {t('soon')}...
      </Styles.JTitle>
    </Styles.JWrapper>
  )
}
