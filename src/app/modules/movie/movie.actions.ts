import { AppDispatch } from '@/app/store'
import { responseHandler } from '@/services/responseHandler'
import { SET_POPULAR_MOVIES } from './movie'

export const getPopularMovies = () => async (dispatch: AppDispatch) => {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=aa7ae602c0b7e0c89de15b78fa599136'
  const response = await fetch(url)
  const data = await responseHandler(response)
  dispatch(SET_POPULAR_MOVIES(data))
}
