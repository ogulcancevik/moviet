import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PopularMovies from './views/PopularMovies'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PopularMovies />} />
    </Routes>
  )
}

export default App
