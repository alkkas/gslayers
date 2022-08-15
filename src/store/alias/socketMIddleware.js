import { startSocket } from '@services/webSocket/webSocket'
import { store } from '@store/store'


let socketStarted = false
export const socketMiddleware = _ => next => action => {


  next(action)
}
