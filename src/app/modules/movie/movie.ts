import { createSlice } from '@reduxjs/toolkit'
import { IPopularMovies } from './movie.types'
export interface MovieState {
  popularMovies: IPopularMovies
}

const initialState: MovieState = {
  popularMovies: {
    page: 0,
    results: []
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    SET_POPULAR_MOVIES: (state, action) => {
      state.popularMovies = action.payload
    }
  }
})

export const { SET_POPULAR_MOVIES } = counterSlice.actions
export default counterSlice.reducer
