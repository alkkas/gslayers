import React from 'react'
import * as Styles from './Player.styles'
import Teams from '../Teams/Teams'
export default function PlayerUi() {
  return (
    <>
      <Styles.InfoContainer color="orange">
        <h2>points</h2>
        <span>25</span>
      </Styles.InfoContainer>
      <Styles.InfoContainer color="red">
        <h2>time</h2>
        <span>160s</span>
      </Styles.InfoContainer>
      <Styles.InfoContainer color="orange">
        <h2>mode</h2>
        <span>easy</span>
      </Styles.InfoContainer>
      <Teams />
    </>
  )
}
