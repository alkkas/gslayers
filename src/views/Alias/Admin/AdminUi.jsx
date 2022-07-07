import React, { useState, useCallback } from 'react'
import Teams from '../Teams/Teams'
import * as Styles from './Admin.styles'
import Counter from './Counter'
import LinkImg from '@assets/img/link.png'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { AliasUiContainer } from '@components/common/common.styles'
import CopySvg from '@assets/img/copy.svg'
import {
  statusChange,
  timeChange,
  pointsChange,
  modeChange,
  linkChange,
} from '@store/alias/aliasSlice'
import { sendReq } from '@services/alias/sendReq'

const AdminTeams = enhancedTeams(PreGameTeams)

export default function AdminUi() {
  const settings = useSelector(state => state.alias.settings)
  const preGameSettings = useSelector(state => state.alias)
  const mods = ['easy', 'medium', 'hard']
  let timer
  const dispatch = useDispatch()
  const link =
    'http://localhost:8080/alias?lobby=' +
    useSelector(state => state.alias.lobbyId)
  const [animateCopy, setAnimateCopy] = useState(false)

  function handleClick() {
    navigator.clipboard.writeText(link)
    setAnimateCopy(true)
    clearTimeout(timer)
    timer = setTimeout(() => setAnimateCopy(false), 2500)
  }
  return (
    <AliasUiContainer>
      <Styles.AdminGroup>
        <Styles.EditContainer color="orange">
          <h2>points</h2>
          <Counter changeValue={pointsChange} type="points" />
        </Styles.EditContainer>
        <Styles.EditContainer color="red">
          <h2>time</h2>
          <Counter changeValue={timeChange} type="time" />
        </Styles.EditContainer>
      </Styles.AdminGroup>

      <Styles.EditContainer color="orange">
        {mods.map(i => (
          <Styles.Mode
            active={settings.mode === i}
            onClick={() => dispatch(modeChange(i))}
          >
            {i}
          </Styles.Mode>
        ))}
      </Styles.EditContainer>
      <AdminTeams admin />

      <Styles.LinkField animate={animateCopy}>
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
