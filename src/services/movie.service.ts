import { API_KEY, BASE_URL } from './baseUrls'
import { responseHandler } from './responseHandler'
const fetchPopularMovies = async () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchMovieTrailerInfo = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchTopRatedMovies = async () => {
  const url = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchMovieDetail = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchMovieCredits = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchSmilarMovies = async (movieId: number) => {
  const url = `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
  const response = await fetch(url)
  return await responseHandler(response)
}

const fetchSearchedMovie = async (query: string) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  const response = await fetch(url)
  const { results } = await responseHandler(response)
  return await results
}

export const movieService = {
  fetchPopularMovies,
  fetchMovieTrailerInfo,
  fetchTopRatedMovies,
  fetchMovieDetail,
  fetchMovieCredits,
  fetchSmilarMovies,
  fetchSearchedMovie
}
