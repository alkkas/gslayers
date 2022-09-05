import React, { useState, useRef, useEffect } from 'react'
import * as Styles from './Admin.styles'
import { useSelector, useDispatch } from 'react-redux'
import {
  useGetPreGameDataQuery,
  useSendDataMutation,
} from '@store/api/apiSlice'

export default function Counter({ type, changeValue }) {
  const { data } = useGetPreGameDataQuery()
  const [sendData] = useSendDataMutation()
  const settings = data.settings

  const input = useRef(null)
  const dispatch = useDispatch()

  function checkValue() {
    const focused = document.activeElement
    if (input.current !== focused) {
      if (value < 15) {
        addValue(15)
      }
    }
  }
  function addValue(value) {
    if (!isNaN(+value)) {
      if (+value > 180) {
        dispatch(changeValue(180))
      } else if (+value <= 0) {
        dispatch(changeValue(0))
      } else {
        dispatch(changeValue(+value))
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', checkValue)
    document.addEventListener('click', checkValue)
    return () => {
      document.removeEventListener('keyup', checkValue)
      document.removeEventListener('click', checkValue)
    }
  })

  return (
    <Styles.Wrapper>
      <Styles.MinusButton onClick={() => addValue(value - 1)} />
      <input
        ref={input}
        value={value}
        onChange={event => addValue(event.target.value)}
      />
      <Styles.PlusButton onClick={() => addValue(value + 1)} />
    </Styles.Wrapper>
  )
}
