import React, { useState, useEffect } from 'react'
import Teams from '../Teams/Teams'
import * as Styles from './Admin.styles'
import Counter from './Counter'
import LinkImg from '@assets/img/link.png'
import enhancedTeams from '../Teams/Teams'
import PreGameTeams from '../Teams/PreGameTeams'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { AliasUiContainer } from '@components/common/common.styles'
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
  const dispatch = useDispatch()

  async function createLobby() {
    const data = await sendReq(
      'http://26.71.3.113:8000/api/createLink/',
      preGameSettings
    )
    dispatch(linkChange(data.lobbyId))
    console.log(data)
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

      <Styles.GenerateLinkBtn onClick={createLobby}>
        <span>generate link</span>
        <img src={LinkImg} alt="link symbol" />
      </Styles.GenerateLinkBtn>
      <Styles.LinkField>
        <input />
        <button></button>
      </Styles.LinkField>
    </AliasUiContainer>
  )
}
