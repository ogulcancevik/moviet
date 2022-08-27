import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from './modules/movie/movie.types'
export interface GlobalState {
  menuShow: boolean;
  collection: IMovie[];
}

const initialState: GlobalState = {
  menuShow: false,
  collection: []
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    TOGGLE_MENU: (state) => {
      state.menuShow = !state.menuShow
      document.body.style.overflow = state.menuShow ? 'hidden' : 'auto'
    },
    SET_COLLECTION: (state, action) => {
      state.collection.push(action.payload)
    },
    REMOVE_COLLECTION: (state, action) => {
      state.collection = state.collection.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})
export const { SET_COLLECTION, REMOVE_COLLECTION, TOGGLE_MENU } =
  globalSlice.actions
export default globalSlice.reducer
