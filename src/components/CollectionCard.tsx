import { globalSelector } from '@/app/selectors'
import React from 'react'
import { useSelector } from 'react-redux'

const CollectionCard: React.FC = () => {
  const { collection } = useSelector(globalSelector)
  const redirectMovieDetail = (item: any) => {
    const { id } = item
    location.pathname = ''
    window.location.href = `/movie/${id}`
  }
  return (
    <div className="grid grid-cols-5 mt-5">
      {collection.map((movie) => {
        return (
          <div
            className="flex flex-col justify-center items-center mb-5 animate__animated animate__fadeInDown  cursor-pointer"
            key={movie.id}
            onClick={() => redirectMovieDetail(movie)}
          >
            <div className="w-72">
              <img
                className="rounded-2xl"
                src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <h3 className="mt-4">{movie.title} </h3>
          </div>
        )
      })}
    </div>
  )
}

export default CollectionCard
