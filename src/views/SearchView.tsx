import { movieSelector } from '@/app/selectors'
import SearchedMovies from '@/components/SearchedMovies'
import SearchInput from '@/components/SearchInput'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const SearchView: React.FC = () => {
  const { searchedMovies } = useSelector(movieSelector)
  const isSearched = useMemo(() => {
    return searchedMovies.length > 0
  }, [searchedMovies])
  return (
    <div>
      <SearchInput />
      {isSearched && <SearchedMovies searchedMovies={searchedMovies} />}
    </div>
  )
}

export default SearchView
