import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Header from './components/shared/Header'
import CollectionView from './views/CollectionView'
import HomeView from './views/HomeView'
import MovieDetailView from './views/MovieDetailView'
const App: React.FC = () => {
  return (
      <>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/movie/:movieId" element={<MovieDetailView />} />
          <Route path="/collection" element={<CollectionView />} />
        </Routes>
      </>
  )
}

export default App
