import { getPopularMovies } from '@/app/modules/movie/movie.actions'
import { useAppDispatch } from '@/app/store'
import React, { useEffect } from 'react'

const PopularMovies = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPopularMovies())
  }, [])
  return (
    <div>PopularMovies</div>
  )
}

export default PopularMovies
