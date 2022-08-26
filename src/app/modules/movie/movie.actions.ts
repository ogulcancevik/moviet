import { AppDispatch } from '@/app/store'
import { movieService } from '@/services/movie.service'
import { SET_MOVIE_CREDITS, SET_MOVIE_DETAIL, SET_MOVIE_TRAILER_INFO, SET_POPULAR_MOVIES, SET_SEARCHED_MOVIES, SET_SIMILAR_MOVIES, SET_TOP_RATED_MOVIES } from './movie'

export const getPopularMovies = () => async (dispatch: AppDispatch) => {
  const { results } = await movieService.fetchPopularMovies()
  dispatch(SET_POPULAR_MOVIES(results))
}

export const getTopRatedMovies = () => async (dispatch: AppDispatch) => {
  const { results } = await movieService.fetchTopRatedMovies()
  dispatch(SET_TOP_RATED_MOVIES(results))
}

export const getMovieData = () => async (dispatch : any) => {
  await dispatch(getPopularMovies())
  await dispatch(getTopRatedMovies())
}

export const getMovieTrailerInfo = (movieId : number) => async (dispatch: AppDispatch) => {
  const { results } = await movieService.fetchMovieTrailerInfo(movieId)
  dispatch(SET_MOVIE_TRAILER_INFO(results))
}
export const getMovieCredits = (movieId : number) => async (dispatch: AppDispatch) => {
  const credits = await movieService.fetchMovieCredits(movieId)
  dispatch(SET_MOVIE_CREDITS(credits))
}

export const getSimilarMovies = (movieId : number) => async (dispatch: AppDispatch) => {
  const { results } = await movieService.fetchSmilarMovies(movieId)
  dispatch(SET_SIMILAR_MOVIES(results))
}
export const getMovieDetail = (movieId : number) => async (dispatch: any) => {
  const movie = await movieService.fetchMovieDetail(movieId)
  await dispatch(SET_MOVIE_DETAIL(movie))
  await dispatch(getMovieCredits(movieId))
  await dispatch(getMovieTrailerInfo(movieId))
  await dispatch(getSimilarMovies(movieId))
}

export const getSearchedMovies = (query : string) => async (dispatch: AppDispatch) => {
  const results = await movieService.fetchSearchedMovie(query)
  if (!results.length) {
    console.log('film yok aq')
    return
  }
  dispatch(SET_SEARCHED_MOVIES(results))
}
