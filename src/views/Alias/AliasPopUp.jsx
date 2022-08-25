import React, { useState, useEffect } from 'react'
import { getData } from '@services/alias/sendReq'
import * as Styles from './Alias.styles'
import { setValues, getValue } from '@services/localStorage'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {
  statusChange,
  changeCurrentPlayer,
  playerJoin,
  setRules,
  setPlayerFields,
  setAdminFields,
} from '@store/alias/mainSlice'
import { useTranslation } from 'react-i18next'

export default function AliasPopUp() {
  const prevValue = getValue('name')
  const [searchParams, setSearchParams] = useSearchParams()
  const [lobby, setLobby] = useState(null)
  const [value, setValue] = useState(prevValue ? prevValue : '')
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    setLobby(searchParams.get('lobby'))
  })
  async function joinLobby() {
    if (value.match(/^(?!\s*$).+/)) {
      setValues({ name: value })

      dispatch(statusChange('loading'))
      if (lobby) {
        const data = await getData(
          `https://api.gslayers.ru/alias/?lobby=${lobby}&name=${value}`
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
          `https://api.gslayers.ru/alias/?newLobby=true&name=${value}`
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
        placeholder={`${t('name')}...`}
      />
      <Styles.PopUpButton onClick={joinLobby}>
        {lobby ? t('join') : t('create')}
      </Styles.PopUpButton>
    </Styles.PopUpWrapper>
  )
}
