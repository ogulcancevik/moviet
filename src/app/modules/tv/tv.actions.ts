import { AppDispatch } from '@/app/store'
import { responseHandler } from '@/services/responseHandler'
import { SET_POPULAR_SERIES } from './tv'

export const getPopularSeries = () => async (dispatch: AppDispatch) => {
  const url = 'https://api.themoviedb.org/3/tv/popular?api_key=aa7ae602c0b7e0c89de15b78fa599136'
  const response = await fetch(url)
  const data = await responseHandler(response)
  dispatch(SET_POPULAR_SERIES(data))
}
