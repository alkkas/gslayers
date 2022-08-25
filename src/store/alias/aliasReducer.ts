import mainSlice from '@store/alias/mainSlice'
import { combineReducers } from '@reduxjs/toolkit'
import settingsSlice from './settingsSlice'

const rootReducer = combineReducers({
  settings: settingsSlice,
  main: mainSlice,
})
export default rootReducer
// This would produce the following state object
