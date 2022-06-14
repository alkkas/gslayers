import React from 'react'
import * as Styles from './Teams.styles'

export default function enhancedTeams(Component) {
  return function Teams(props) {
    return (
      <Styles.TeamsWrapper>
        <Styles.TeamsTitle>teams</Styles.TeamsTitle>
        <Component {...props} />
      </Styles.TeamsWrapper>
    )
  }
}
