import { IMovie } from '@/app/modules/movie/movie.types'
import React from 'react'
interface ISearchedMoviesProps {
  searchedMovies: IMovie[];
}
const SearchedMovies: React.FC<ISearchedMoviesProps> = (props) => {
  const { searchedMovies } = props
  const redirectMovieDetail = (item: any) => {
    const { id } = item
    location.pathname = ''
    window.location.href = `/movie/${id}`
  }
  return (
    <div
      className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-12"
      style={{
        height: 'calc(100vh - 8rem)'
      }}
    >
      {searchedMovies.map((movie) => {
        return (
          <div key={movie.id} className="animate__animated animate__zoomIn cursor-pointer" onClick={() => redirectMovieDetail(movie)}>
            <img
              className="rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="text-center mt-3">{movie.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SearchedMovies
