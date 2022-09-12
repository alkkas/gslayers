import mainSlice from '@store/alias/mainSlice'
import { combineReducers } from '@reduxjs/toolkit'
import settingsSlice from './settingsSlice'
import { apiSlice } from '@store/api/apiSlice'
const rootReducer = combineReducers({
  settings: settingsSlice,
  main: mainSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export default rootReducer
