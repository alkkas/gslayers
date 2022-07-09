import { startSocket } from '@services/webSocket/webSocket'
import { store } from '@store/store'

let socketStarted = false
export const socketMiddleware = state => next => action => {
  if (
    store.getState().alias.lobbyId &&
    !socketStarted &&
    store.getState().alias.currentPlayer
  ) {
    startSocket(store, store.getState().alias.lobbyId)
    socketStarted = true
  }

  next(action)
}
