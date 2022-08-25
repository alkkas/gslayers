import { settingsType } from '@models/alias.model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: settingsType = {
  points: 15,
  time: 15,
  mode: 'easy',
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    pointsChange(state, action: PayloadAction<number>) {
      state.points = action.payload
    },
    timeChange(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
    modeChange(state, action: PayloadAction<'easy' | 'medium' | 'hard'>) {
      state.mode = action.payload
    },
  },
})
export default settingsSlice.reducer
export const { pointsChange, timeChange, modeChange } = settingsSlice.actions
