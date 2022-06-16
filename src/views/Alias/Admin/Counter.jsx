import React, { useState } from 'react'
import * as Styles from './Admin.styles'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter({ type, changeValue }) {
  const value = useSelector(state => state.alias.settings[type])
  const dispatch = useDispatch()
  function addValue(value) {
    if (+value) {
      if (value < 15) {
        dispatch(changeValue(15))
      } else if (value > 999) {
        dispatch(changeValue(999))
      } else {
        dispatch(changeValue(+value))
      }
    }
  }
  return (
    <Styles.Wrapper>
      <Styles.MinusButton onClick={() => addValue(value - 1)} />
      <input value={value} onChange={event => addValue(event.target.value)} />
      <Styles.PlusButton onClick={() => addValue(value + 1)} />
    </Styles.Wrapper>
  )
}
