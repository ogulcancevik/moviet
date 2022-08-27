import { IMovie } from '@/app/modules/movie/movie.types'
import React from 'react'

interface ICollectionCardProps {
  collection: IMovie[]
}
const CollectionCard: React.FC<ICollectionCardProps> = (props) => {
  const { collection } = props
  const redirectMovieDetail = (item: any) => {
    const { id } = item
    location.pathname = ''
    window.location.href = `/movie/${id}`
  }
  return (
    <div className="grid grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-5 gap-10 m-9">
      {collection.map((movie) => {
        return (
          <div
            className="flex flex-col justify-center items-center mb-5 animate__animated animate__zoomIn cursor-pointer"
            key={movie.id}
            onClick={() => redirectMovieDetail(movie)}
          >
            <div>
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
