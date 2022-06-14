import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { setAutoFreeze } from 'immer'
import getRandomInt from '@utils/helpers/random'
export const aliasAdapter = createEntityAdapter()

const players = {
  10: {
    id: 10,
    name: 'player1',
    status: 'available',
    team: null,
  },
  20: {
    id: 20,
    name: 'player2',
    status: 'player',
    team: 2,
  },
  30: {
    id: 30,
    name: 'player3',
    status: 'player',
    team: 2,
  },
  40: {
    id: 40,
    name: 'player4',
    status: 'player',
    team: 1,
  },
}
const initialState = aliasAdapter.getInitialState({
  status: 'loading',
  currentPlayer: 10,
  admin: true,
  settings: {
    points: 30,
    time: 30,
    mode: 'hard',
  },
  teams: [
    {
      id: 1,
      name: 'name1',
      points: 0,
      players: {
        0: 40,
        1: null,
      },
      guessing: 1,
      explaining: 2,
    },
    {
      id: 2,
      name: 'name2',
      points: 0,
      players: {
        0: 20,
        1: 30,
      },
      guessing: 1,
      explaining: 2,
    },
  ],
})

export const fetchPlayers = createAsyncThunk(
  'alias/featchPlayers',
  async () => {
    return players
  }
)

const aliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    //seems that I'm overusing redux and giving him values that he shouldn't have
    //but turns out if I were using react state it would be a hell to change the state
    //I will pass a lot of props to over components and I even needed deepclode from lodash
    //to change state properly that's why in this case I will write this type of reducers:
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
    addTeam(state, _) {
      const id = getRandomInt(100, 100000000)
      state.teams.push({
        id,
        name: '',
        points: 0,
        players: {
          0: null,
          1: null,
        },
        guessing: 1,
        explaining: 2,
      })
    },
    teamNameChange(state, action) {
      const { value, index } = action.payload
      state.teams[index].name = value
    },
    playerJoin(_, action) {
      aliasAdapter.addOne(action.payload)
    },

    playerLeave(_, action) {
      aliasAdapter.removeOne(action.payload)
    },
    teamJoin(state, action) {
      const { teamIndex, playerIndex } = action.payload
      const playerId = state.currentPlayer
      const teamId = state.teams[teamIndex].id
      state.teams[teamIndex].players[playerIndex] = playerId
      aliasAdapter.updateOne(state, {
        id: playerId,
        changes: { team: teamId, status: 'player' },
      })
    },
    teamLeave(state, action) {
      const { teamIndex, playerIndex } = action.payload
      const playerId = state.teams[teamIndex].players[playerIndex]
      state.teams[teamIndex].players[playerIndex] = null
      aliasAdapter.updateOne(state, {
        id: playerId,
        changes: { team: '', status: 'available' },
      })
    },
    setRules(state, action) {
      state.admin = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      aliasAdapter.setAll(state, action.payload)
      state.status = 'preGame'
    })
  },
})

export const selectStatus = state => state.alias.status
export const {
  statusChange,
  pointsChange,
  timeChange,
  modeChange,
  teamNameChange,
  teamLeave,
  teamJoin,
  addTeam,
  setRules,
} = aliasSlice.actions

export const { selectAll: selectAllPlayers, selectById: selectPlayer } =
  aliasAdapter.getSelectors(state => state.alias)

export default aliasSlice.reducer
