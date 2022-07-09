import { configureStore } from '@reduxjs/toolkit'
import aliasReducer from './alias/aliasSlice'
import { socketMiddleware } from './alias/socketMIddleware'
import _ from 'lodash'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, aliasReducer)
export const store = configureStore({
  reducer: {
    alias: aliasReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(socketMiddleware),
})
export const persistor = persistStore(store)
