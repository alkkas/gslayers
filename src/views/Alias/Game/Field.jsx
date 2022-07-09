import React, { useRef, useEffect, useState } from 'react'
import * as Styles from './Games.styles'
import { useSelector } from 'react-redux'
import { useDimensions } from '@utils/hooks/useDimensions'
import { getCoords } from '@services/getCoords'

const Field = ({ word, player, guess }) => {
  const words = useSelector(state => state.alias.words)

  const wrapper = useRef(null)
  const { width, height } = useDimensions(wrapper)

  let [wordsCoords, setWordsCoords] = useState(null)
  useEffect(() => {
    setWordsCoords(getCoords(width, height, words))
  }, [width])
  return (
    <Styles.Field ref={wrapper}>
      {wordsCoords?.map(i => (
        <Styles.Word
          opacity={i.opacity}
          fontSize={i.fontSize}
          top={i.y}
          left={i.x}
        >
          {i.word}
        </Styles.Word>
      ))}
      <Styles.MainWord filter={player === guess}>{word}</Styles.MainWord>
    </Styles.Field>
  )
}
export default Field
