import { API_KEY, BASE_URL } from './baseUrls'
import { responseHandler } from './responseHandler'
const fetchPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

export const movieService = {
  fetchPopularMovies
}
