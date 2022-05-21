import React from 'react'
import Teams from '../Teams/Teams'
import * as Styles from './Admin.styles'
import Counter from './Counter'
export default function AdminUi() {
  return (
    <>
      <Styles.EditContainer color="orange">
        <h2>points</h2>
        <Counter initial={25} />
      </Styles.EditContainer>
      <Styles.EditContainer color="red">
        <h2>time</h2>
        <Counter initial={25} />
      </Styles.EditContainer>
      <Styles.EditContainer color="orange">
        <Styles.Mode active>easy</Styles.Mode>
        <Styles.Mode>medium</Styles.Mode>
        <Styles.Mode>hard</Styles.Mode>
      </Styles.EditContainer>
      <Teams admin />
    </>
  )
}
