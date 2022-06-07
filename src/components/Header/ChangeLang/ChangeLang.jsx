import React, { useState } from 'react'
import * as Styles from './ChangeLang.styles'

export default function ChangeLang() {
  let [lang, setLang] = useState('en')
  function handleClick(l) {
    setLang(l)
  }
  return (
    <Styles.Wrapper>
      <Styles.Lang active={lang == 'en'} onClick={() => handleClick('en')}>
        en
      </Styles.Lang>
      <Styles.Lang active={lang == 'ru'} onClick={() => handleClick('ru')}>
        ru
      </Styles.Lang>
    </Styles.Wrapper>
  )
}
