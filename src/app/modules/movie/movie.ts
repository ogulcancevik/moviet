import { createSlice } from '@reduxjs/toolkit'
import { IMovie, IMovieCredits, IMovieDetail, IMovieTrailerInfo } from './movie.types'
export interface MovieState {
  popularMovies: IMovie[],
  topRatedMovies: IMovie[],
  movieTrailerInfo: IMovieTrailerInfo[],
  movieDetail: IMovieDetail,
  movieCredits: IMovieCredits,
  similarMovies: IMovie[]
}

const initialState: MovieState = {
  popularMovies: [],
  topRatedMovies: [],
  movieTrailerInfo: [],
  movieDetail: {} as IMovieDetail,
  movieCredits: {} as IMovieCredits,
  similarMovies: []
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    SET_POPULAR_MOVIES: (state, action) => {
      state.popularMovies = action.payload
    },
    SET_TOP_RATED_MOVIES: (state, action) => {
      state.topRatedMovies = action.payload
    },
    SET_MOVIE_TRAILER_INFO: (state, action) => {
      state.movieTrailerInfo = action.payload
    },
    SET_MOVIE_DETAIL: (state, action) => {
      state.movieDetail = action.payload
    },
    SET_MOVIE_CREDITS: (state, action) => {
      state.movieCredits = action.payload
    },
    SET_SIMILAR_MOVIES: (state, action) => {
      state.similarMovies = action.payload
    }
  }
})

export const { SET_POPULAR_MOVIES, SET_TOP_RATED_MOVIES, SET_MOVIE_TRAILER_INFO, SET_MOVIE_DETAIL, SET_MOVIE_CREDITS, SET_SIMILAR_MOVIES } = movieSlice.actions
export default movieSlice.reducer
