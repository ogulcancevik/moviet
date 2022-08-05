import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getPopularMovies } from './app/modules/movie/movie.actions'
import { useAppDispatch } from './app/store'
import Header from './components/shared/Header'
import HomeView from './views/HomeView'
const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getPopularMovies())
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  )
}

export default App
