import React, { useRef, useEffect, useState } from 'react'
import * as Styles from './Games.styles'
import { useDimensions } from '@utils/hooks/useDimensions'
import { getCoords } from '@services/getCoords'
import { StyleSheetConsumer } from 'styled-components'
import { useSelector } from 'react-redux'

export default function Field({ word }) {
  const words = useSelector(state => state.alias.words)
  const wrapper = useRef(null)
  const { width, height } = useDimensions(wrapper)

  let wordsCoords = getCoords(width, height, words)

  useEffect(() => {
    console.log(wordsCoords)
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
      <Styles.MainWord>{word}</Styles.MainWord>
    </Styles.Field>
  )
}
