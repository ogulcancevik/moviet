import { getSearchedMovies } from '@/app/modules/movie/movie.actions'
import { useAppDispatch } from '@/app/store'
import React, { useEffect, useRef, useState } from 'react'

const SearchInput: React.FC = () => {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState<string>('')
  const searchInput = useRef<HTMLInputElement>(null)
  useEffect(() => {
    searchInput.current?.focus()
  }, [])
  const handleSearch = async () => {
    if (!query) return
    await dispatch(getSearchedMovies(query))
  }
  return (
    <div className="flex justify-center animate__animated animate__fadeInDown">
      <div className="mt-32 flex w-96 sm:w-72">
        <input
          ref={searchInput}
          value={query}
          placeholder="Search a movie"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
          type="text"
          className="outline-0 border border-white rounded-l-full border-r-0 bg-black bg-opacity-20 w-full h-12 pl-6 sm:text-xs"
        />
        <div
          onClick={handleSearch}
          className="cursor-pointer bg-custom-red hover:bg-white hover:text-custom-red transition-all h-12 rounded-r-full border-white border border-l-0 items-center flex w-20 justify-center sm:text-xs"
        >
          Search
        </div>
      </div>
    </div>
  )
}

export default SearchInput
