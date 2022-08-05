import { AppDispatch } from '@/app/store'
import { movieService } from '@/services/movie.service'
import { SET_POPULAR_MOVIES } from './movie'

export const getPopularMovies = () => async (dispatch: AppDispatch) => {
  const { results } = await movieService.fetchPopularMovies()
  dispatch(SET_POPULAR_MOVIES(results))
}
