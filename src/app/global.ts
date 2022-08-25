import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from './modules/movie/movie.types'
export interface GlobalState {
  collection: IMovie[] // TODO: fix this type.
}

const initialState: GlobalState = {
  collection: []
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    SET_COLLECTION: (state, action) => {
      state.collection.push(action.payload)
    }
  }
})
export const { SET_COLLECTION } = globalSlice.actions
export default globalSlice.reducer
