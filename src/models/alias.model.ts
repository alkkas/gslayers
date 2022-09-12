export interface NormalizedObjs<T> {
  entities: { [id: string]: T }
  ids: string[]
}
export type modes = 'easy' | 'medium' | 'hard'
export type statusType = 'preGame' | 'game' | 'endRound' | 'win'
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
export interface modeType {
  easy: 'простой' | 'easy'
  medium: 'средний' | 'medium'
  hard: 'сложный' | 'hard'
}
export interface settingsType {
  points: number
  time: number
  mode: modes
}
export interface preGameTypes {
  status: statusType
  currentPlayer: string
  admin: string
  lobbyId: string
  teams: teamType[]
  players: playerType[]
  settings: settingsType
}

export interface gameStateType {
  wordsSettled: boolean
  winner: string
  rounds: number
  currentTeam: string
  socketStarted: boolean
  currentSession: {
    skipped: number
    guessed: number
    currentWord: string
  }
}
