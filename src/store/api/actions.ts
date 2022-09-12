import { createAction } from '@reduxjs/toolkit'
import { modes, statusType } from '@models/alias.model'

export const pointsChange = createAction<number>('pointsChange')
export const timeChange = createAction<number>('timeChange')
export const modeChange = createAction<modes>('modeChange')
export const addTeam = createAction('addTeam')
export const statusChange = createAction<statusType>('statusChange')
export const teamNameChange =
  createAction<{ id: string; value: string }>('teamNameChange')
export const deleteTeam = createAction<string>('deleteTeam')
export const teamLeave =
  createAction<{ playerId: string; teamId: string }>('teamLeave')
export const teamJoin =
  createAction<{ playerId: string; teamId: string }>('teamJoin')
