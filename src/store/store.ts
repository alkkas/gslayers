import { configureStore } from '@reduxjs/toolkit'
import aliasReducer from './alias/mainSlice'
import { socketMiddleware } from './alias/socketMIddleware'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from './rootReducer'
import { apiSlice } from '@store/api/apiSlice'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([socketMiddleware, apiSlice.middleware]),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
