import React from 'react'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { globalSelector } from './app/selectors'
import Header from './components/shared/Header'
import Menu from './components/shared/Menu'
import CollectionView from './views/CollectionView'
import HomeView from './views/HomeView'
import MovieDetailView from './views/MovieDetailView'
import NotFoundView from './views/NotFoundView'
import SearchView from './views/SearchView'
const App: React.FC = () => {
  const { menuShow } = useSelector(globalSelector)
  return (
    <>
      <Header />
      {menuShow && <Menu />}
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movie/:movieId" element={<MovieDetailView />} />
        <Route path="/collection" element={<CollectionView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  )
}

export default App
