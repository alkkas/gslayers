import React, { useState, useEffect } from 'react'
import * as Styles from './Alias.styles'
import { setValues, getValue } from '@services/localStorage'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  useCreateLobbyMutation,
  useJoinLobbyMutation,
} from '@store/api/apiSlice'

const AliasLogin = (): JSX.Element => {
  const [joinLobby] = useJoinLobbyMutation()
  const [createLobby] = useCreateLobbyMutation()

  const prevValue: string = getValue('name')
  const [searchParams] = useSearchParams()
  const [lobby, setLobby] = useState<string | null>(null)
  const [value, setValue] = useState(prevValue ? prevValue : '')
  const { t } = useTranslation()

  useEffect(() => {
    setLobby(searchParams.get('lobby'))
  }, [])
  async function handleClick() {
    if (value.match(/^(?!\s*$).+/)) {
      setValues({ name: value })
      if (lobby) {
        await joinLobby({ name: value, lobbyId: lobby }).unwrap()
      } else {
        await createLobby(value).unwrap()
      }
    }
  }

  return (
    <Styles.PopUpWrapper>
      <Styles.PopUpInput
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        placeholder={`${t('name')}...`}
      />
      <Styles.PopUpButton onClick={handleClick}>
        {lobby ? t('join') : t('create')}
      </Styles.PopUpButton>
    </Styles.PopUpWrapper>
  )
}
export default AliasLogin
