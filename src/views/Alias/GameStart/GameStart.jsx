import React from 'react'
import RoundStartTeams from '../Teams/RoundStartTeams'
import enhancedTeams from '../Teams/Teams'
import { GameButton } from '@components'

const StartTeams = enhancedTeams(RoundStartTeams)

export default function GameStart() {
  return (
    <div style={{ marginBottom: '80px' }}>
      <StartTeams />
      <GameButton>start</GameButton>
    </div>
  )
}
