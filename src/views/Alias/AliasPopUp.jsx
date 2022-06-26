import React, { useState } from 'react'
import { getData } from '@services/alias/sendReq'
import * as Styles from './Alias.styles'
import { setValues, getValue } from '@services/localStorage'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import createPlayer from '@utils/helpers/createPlayers'
import {
  statusChange,
  changeCurrentPlayer,
  playerJoin,
  setRules,
  setPlayerFields,
  setAdminFields,
} from '@store/alias/aliasSlice'

export default function AliasPopUp() {
  const prevValue = getValue('name')
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(prevValue ? prevValue : '')
  const dispatch = useDispatch()
  async function joinLobby() {
    if (value.match(/^(?!\s*$).+/)) {
      setValues({ name: value })
      const lobby = searchParams.get('lobby')
      if (lobby) {
        const data = await getData(
          `http://26.71.3.113:8000/alias/?lobby=${lobby}&name=${value}`
        )
        console.log(data)
        if (data.exist) {
          //add data to store
          dispatch(setPlayerFields(data.data))
          dispatch(statusChange('preGame'))
        } else {
          //show that lobby doesn't exist
        }
      } else {
        const data = await getData(
          `http://26.71.3.113:8000/alias/?newLobby=true&name=${value}`
        )
        console.log(data)
        dispatch(setAdminFields(data))
        dispatch(statusChange('preGame'))
        //show admin panel
      }
    }
  }
  return (
    <Styles.PopUpWrapper>
      <Styles.PopUpInput
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Styles.PopUpButton onClick={joinLobby}>Join</Styles.PopUpButton>
    </Styles.PopUpWrapper>
  )
}
