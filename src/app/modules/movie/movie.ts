import { createSlice } from '@reduxjs/toolkit'
import { IMovie } from './movie.types'
export interface MovieState {
  popularMovies: IMovie[]
}

const initialState: MovieState = {
  popularMovies: []
}

export const counterSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    SET_POPULAR_MOVIES: (state, action) => {
      state.popularMovies = action.payload
    }
  }
})

export const { SET_POPULAR_MOVIES } = counterSlice.actions
export default counterSlice.reducer
