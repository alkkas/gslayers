import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { setAutoFreeze } from 'immer'

export const aliasAdapter = createEntityAdapter()

const initialState = aliasAdapter.getInitialState({
  status: 'win',
  settings: {
    points: 30,
    time: 30,
    mode: 'hard',
  },
  teams: {
    name: {
      points: 0,
      players: {
        1: '',
        2: '',
      },
      guessing: 1,
      explaining: 2,
    },
    name2: {
      points: 0,
      players: {
        1: '',
        2: '',
      },
      guessing: 1,
      explaining: 2,
    },
  },
})

const aliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    pointsChange(state, action) {
      state.settings.points = action.payload
    },
    timeChange(state, action) {
      state.settings.time = action.payload
    },
    modeChange(state, action) {
      state.settings.mode = action.payload
    },
    statusChange(state, action) {
      state.status = action.payload
    },
    playerJoin(_, action) {
      aliasAdapter.addOne(action.payload)
    },
    playerLeave(_, action) {
      aliasAdapter.removeOne(action.payload)
    },
    teamJoin(state, action) {
      const { teamName, player } = action.payload
      const team = state.teams[teamName]

      if (team.players[1] === '') {
        team.players[1] = player
      } else {
        team.players[2] = player
      }

      aliasAdapter.updateOne({
        id: player,
        changes: { team: teamName, status: 'player' },
      })
    },
    teamLeave(state, action) {
      const { teamName, player } = action.payload
      const team = state.teams[teamName]

      Object.entries(team.players).forEach(([key, value]) => {
        if (value === player) {
          team.players[key] = ''
        }
      })
      aliasAdapter.updateOne({
        id: player,
        changes: { team: '', status: 'available' },
      })
    },
  },
})

export const selectStatus = state => state.status
export const { pointsChange } = aliasSlice.actions
export default aliasSlice.reducer
