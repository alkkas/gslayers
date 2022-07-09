import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
export const aliasAdapter = createEntityAdapter()
import { v4 as uuidv4 } from 'uuid'
const players = {
  // 10: {
  //   id: 10,
  //   name: 'player1',
  //   team: 2,
  // },
  // 20: {
  //   id: 20,
  //   name: 'player2',
  //   team: 2,
  // },
  // 30: {
  //   id: 30,
  //   name: 'player3',
  //   team: 2,
  // },
  // 40: {
  //   id: 40,
  //   name: 'player4',
  //   team: 1,
  // },
}

const initialState = aliasAdapter.getInitialState({
  status: 'inputName',
  currentPlayer: null,
  admin: null,
  lobbyId: null,
  wordsSettled: false,
  winner: null,
  rounds: 0,
  currentTeam: null,
  currentSession: {
    skipped: 0,
    guessed: 0,
    currentWord: null,
    usedWords: [],
  },
  words: [],
  settings: {
    points: 15,
    time: 15,
    mode: 'easy',
  },
  teams: [],
})

export const fetchPlayers = createAsyncThunk(
  'alias/featchPlayers',
  async () => {
    return players
  }
)

export const fetchWords = createAsyncThunk(
  'alias/fetchWords',
  async (_, { getState }) => {
    console.log('fetching')
    const lobbyId = getState().alias.lobbyId
    const response = await fetch(
      `https://api.gslayers.ru/words?lobby=${lobbyId}`
    )

    const data = await response.json()
    await fetch(
      `https://api.gslayers.ru/words?lobby=${lobbyId}&wordsFetched=true`
    )
    console.log(data)
    return data
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
    // {
    //   currentPlayer, settings, teams, players
    // }
    setTranslation(state, action) {
      state.t = action.payload
    },
    wordsSettled(state, _) {
      state.wordsSettled = true
    },
    sessionChange(state, action) {
      state.currentSession = action.payload
    },
    setCurrentTeam(state, action) {
      state.currentTeam = action.payload
    },
    increaseRounds(state, _) {
      state.rounds = state.rounds + 1
    },
    cleanUp(state, _) {
      state.rounds = 0
      state.teams = state.teams.map(team => {
        team.points = 0
        return team
      })
    },
    setWinner(state, action) {
      state.winner = action.payload
    },
    teamPointsChange(state, _) {
      const team = state.teams.find(team => team.id === state.currentTeam)
      team.points = team.points + state.currentSession.guessed
      state.rounds = state.rounds + 1
      state.currentSession.guessed = 0
      state.currentSession.skipped = 0
    },
    reverseOrder(state, _) {
      const team = state.teams.find(team => team.id === state.currentTeam)
      team.guessing = Number(!Boolean(team.guessing))
      team.explaining = Number(!Boolean(team.explaining))
    },
    changeCurrentPlayer(state, action) {
      state.currentPlayer = action.payload
    },
    socketStarted(state, action) {
      state.socketStarted = action
    },
    changeFields(state, action) {
      const data = action.payload
      Object.keys(data).forEach(key => {
        if (key === 'players') {
          aliasAdapter.setAll(state, data[key])
        } else {
          state[key] = data[key]
        }
      })
    },
    setPlayerFields(state, action) {
      console.log(action.payload)
      const { settings, currentPlayer, teams, players, lobbyId, admin } =
        action.payload
      state.lobbyId = lobbyId
      state.admin = admin
      state.settings = settings
      state.currentPlayer = currentPlayer
      state.teams = teams
      aliasAdapter.setAll(state, players)
    },
    setAdminFields(state, action) {
      const { currentPlayer, players, lobbyId, teams, settings, admin } =
        action.payload
      state.currentPlayer = currentPlayer
      state.admin = admin
      state.lobbyId = lobbyId
      state.teams = teams
      state.settings = settings
      aliasAdapter.setAll(state, players)
    },
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
      state.teams.push({
        id: uuidv4(),
        name: '',
        points: 0,
        players: {
          0: null,
          1: null,
        },
        guessing: 0,
        explaining: 1,
      })
    },
    teamNameChange(state, action) {
      const { value, index } = action.payload
      state.teams[index].name = value
    },
    playerJoin(_, action) {
      aliasAdapter.addOne(_, action.payload)
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
        changes: { team: teamId },
      })
    },
    deleteTeam(state, action) {
      const team = state.teams.find(team => team.id === action.payload.id)
      state.teams = state.teams.filter(team => team.id !== action.payload.id)
      const players = Object.values(team.players)
      players.forEach(id => {
        if (id) {
          aliasAdapter.updateOne(state, {
            id,
            changes: { team: null },
          })
        }
      })
    },
    teamLeave(state, action) {
      const { teamIndex, playerIndex } = action.payload
      const playerId = state.teams[teamIndex].players[playerIndex]
      state.teams[teamIndex].players[playerIndex] = null
      aliasAdapter.updateOne(state, {
        id: playerId,
        changes: { team: null },
      })
    },
    setRules(state, action) {
      state.admin = action.payload
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        aliasAdapter.setAll(state, action.payload)
      })
      .addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload.words
        state.wordsSettled = true
      })
  },
})

export const selectStatus = state => state.alias.status
export const {
  statusChange,
  pointsChange,
  reverseOrder,
  teamPointsChange,
  increaseRounds,
  timeChange,
  modeChange,
  teamNameChange,
  sessionChange,
  teamLeave,
  teamJoin,
  addTeam,
  cleanUp,
  setTranslation,
  setCurrentTeam,
  setRules,
  playerJoin,
  changeCurrentPlayer,
  linkChange,
  setPlayerFields,
  socketStarted,
  changeFields,
  setWinner,
  setAdminFields,
  deleteTeam,
} = aliasSlice.actions

export const { selectAll: selectAllPlayers, selectById: selectPlayer } =
  aliasAdapter.getSelectors(state => state.alias)

export default aliasSlice.reducer
