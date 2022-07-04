import React, { useRef, useEffect, useState } from 'react'
import * as Styles from './Games.styles'
import { useDimensions } from '@utils/hooks/useDimensions'
import { getCoords } from '@services/getCoords'
import { StyleSheetConsumer } from 'styled-components'

export default function Field() {
  const words = [
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
    'bebra',
    'asdfasf',
    'adsf',
    'asdfa',
    'adfasdf',
    'bebra',
    'asdfasf',
  ]
  const wrapper = useRef(null)
  const { width, height } = useDimensions(wrapper)
  const [wordsUpdated, setWordsUpdated] = useState(false)
  let wordsCoords = getCoords(width, height, words)

  useEffect(() => {
    console.log(wordsCoords)
    setWordsUpdated(true)
  })
  return (
    <Styles.Field ref={wrapper}>
      {wordsCoords.map(i => (
        <Styles.Word
          opacity={i.opacity}
          fontSize={i.fontSize}
          top={i.y}
          left={i.x}
        >
          {i.word}
        </Styles.Word>
      ))}
      <Styles.MainWord>illusions</Styles.MainWord>
    </Styles.Field>
  )
}
