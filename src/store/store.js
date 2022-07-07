import { configureStore } from '@reduxjs/toolkit'
import aliasReducer from './alias/aliasSlice'
import { socketMiddleware } from './alias/socketMIddleware'
import _ from 'lodash'

export const store = configureStore({
  reducer: {
    alias: aliasReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(socketMiddleware),
})
