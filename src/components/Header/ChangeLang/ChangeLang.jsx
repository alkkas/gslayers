import React, { useState } from 'react'
import * as Styles from './ChangeLang.styles'
import i18n from '../../../index'
import { setTranslation } from '@store/alias/mainSlice'
import { useDispatch } from 'react-redux'

export default function ChangeLang({ desktop }) {
  let [lang, setLang] = useState(i18n.language)
  function handleClick(l) {
    i18n.changeLanguage(l)
    setLang(l)
  }
  return (
    <Styles.Wrapper desktop={desktop}>
      <Styles.Lang active={lang === 'en'} onClick={() => handleClick('en')}>
        en
      </Styles.Lang>
      <Styles.Lang active={lang === 'ru'} onClick={() => handleClick('ru')}>
        ru
      </Styles.Lang>
    </Styles.Wrapper>
  )
}
