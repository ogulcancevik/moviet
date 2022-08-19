import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import HomeView from './views/HomeView'
import MovieDetailView from './views/MovieDetailView'
const App: React.FC = () => {
  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movie/:movieId" element={<MovieDetailView />} />
        </Routes>
      </>
  )
}

export default App
