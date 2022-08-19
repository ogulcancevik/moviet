import { createSlice, current } from '@reduxjs/toolkit'
export interface GlobalState {
  collection: any[]
}

const initialState: GlobalState = {
  collection: []
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    SET_COLLECTION: (state, action) => {
    }
  }
})
export const { SET_COLLECTION } = globalSlice.actions
export default globalSlice.reducer
