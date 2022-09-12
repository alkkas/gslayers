import React, { useState } from 'react'

import * as Styles from './Admin.styles'
import Counter from './Counter'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { AliasUiContainer } from '@components/common/common.styles'
import CopySvg from '@assets/img/copy.svg'
import { useTranslation } from 'react-i18next'
import {
  useGetPreGameDataQuery,
  useSendDataMutation,
} from '@store/api/apiSlice'
import { modeType } from '@models/alias.model'
const AdminTeams = enhancedTeams(PreGameTeams)
import { timeChange, pointsChange, modeChange } from '@store/api/actions'

export default function AdminUi() {
  const { t } = useTranslation()
  const { data } = useGetPreGameDataQuery()
  const [sendData] = useSendDataMutation()
  const mods: modeType = {
    easy: t('easy'),
    medium: t('medium'),
    hard: t('hard'),
  }
  let timer: ReturnType<typeof setTimeout>
  const link = 'https://gslayers.ru/alias?lobby=' + data.lobbyId
  const [animateCopy, setAnimateCopy] = useState(false)

  async function handleClick() {
    await navigator.clipboard.writeText(link)
    setAnimateCopy(true)
    clearTimeout(timer)
    timer = setTimeout(() => setAnimateCopy(false), 2500)
  }

  return (
    <AliasUiContainer>
      <Styles.AdminGroup>
        <Styles.EditContainer color="orange">
          <h2>{t('points')}</h2>
          <Counter changeValue={pointsChange} type="points" />
        </Styles.EditContainer>
        <Styles.EditContainer color="red">
          <h2>{t('time')}</h2>
          <Counter changeValue={timeChange} type="time" />
        </Styles.EditContainer>
      </Styles.AdminGroup>

      <Styles.EditContainer color="orange">
        {Object.keys(mods).map((i: keyof modeType) => (
          <Styles.Mode
            key={mods[i]}
            active={data.settings.mode === i}
            onClick={() => sendData(modeChange(i))}
          >
            {mods[i]}
          </Styles.Mode>
        ))}
      </Styles.EditContainer>
      <AdminTeams admin />

      <Styles.LinkField animate={animateCopy} copy={t('copy')}>
        <input value={link} />
        <button onClick={handleClick}>
          <div>
            <CopySvg />
          </div>
        </button>
      </Styles.LinkField>
    </AliasUiContainer>
  )
}
