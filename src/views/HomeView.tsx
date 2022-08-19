import { getMovieData } from '@/app/modules/movie/movie.actions'
import { movieSelector } from '@/app/selectors'
import { useAppDispatch } from '@/app/store'
import GlobalLoading from '@/components/shared/GlobalLoading'
import MovieSlider from '@/components/MovieSlider'
import MultiSlider from '@/components/MultiSlider'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const HomeView: React.FC = () => {
  const { popularMovies, topRatedMovies } = useSelector(movieSelector)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const fetchInit = async () => {
    setIsLoading(true)
    await dispatch(getMovieData())
    setIsLoading(false)
  }
  useEffect(() => {
    fetchInit()
  }, [])
  if (isLoading) {
    return <GlobalLoading />
  } else {
    return (
      <>
        <MovieSlider />
        <MultiSlider title='Trending Movies' item={popularMovies} />
        <MultiSlider title="Top Rated Movies" item={topRatedMovies} />
      </>
    )
  }
}

export default HomeView
