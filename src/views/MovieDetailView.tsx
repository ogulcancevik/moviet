import { getMovieDetail } from '@/app/modules/movie/movie.actions'
import { movieSelector } from '@/app/selectors'
import { useAppDispatch } from '@/app/store'
import DetailBackground from '@/components/DetailBackground'
import MovieDetailContent from '@/components/MovieDetailContent'
import GlobalLoading from '@/components/shared/GlobalLoading'
import MovieTrailer from '@/components/MovieTrailer'
import MultiSlider from '@/components/MultiSlider'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const MovieDetailView: React.FC = () => {
  const { movieId } = useParams()
  const { similarMovies } = useSelector(movieSelector)
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const getMovieDetails = async () => {
    setIsLoading(true)
    await dispatch(getMovieDetail(Number(movieId)))
    setIsLoading(false)
  }
  useEffect(() => {
    getMovieDetails()
  }, [movieId])
  return isLoading
    ? (
    <GlobalLoading />
      )
    : (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <DetailBackground />
        <MovieDetailContent />
      </div>
      <div className="flex h-screen w-screen items-center justify-center">
        <MovieTrailer />
      </div>
      <div>
        <MultiSlider title="Similar Movies" item={similarMovies} />
      </div>
    </>
      )
}

export default MovieDetailView
