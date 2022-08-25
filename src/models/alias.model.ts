export interface NormalizedObjs<T> {
  entites: { [id: string]: T }
  ids: string[]
}
export interface playerType {
  id: string
  name: string
  team: string
}
export interface teamType {
  id: string
  name: string
  points: number
  players: {
    0: string
    1: string
  }
  guessing: 0 | 1
  explaining: 0 | 1
}
export interface settingsType {
  points: number
  time: number
  mode: 'easy' | 'medium' | 'hard'
}
export interface stateType {
  status:
    | 'loading'
    | 'inputName'
    | 'preGame'
    | 'game'
    | 'endRound'
    | 'win'
    | 'error'
  currentPlayer: string
  admin: string
  lobbyId: string
  wordsSettled: boolean
  winner: string
  rounds: number
  currentTeam: string
  socketStarted: boolean
  currentSession: {
    skipped: number
    guessed: number
    currentWord: string
    usedWords: string[]
  }
  words: string[]
  settings: {
    points: number
    time: number
    mode: 'easy' | 'medium' | 'hard'
  }
  teams: teamType[]
  players: playerType[]
}
