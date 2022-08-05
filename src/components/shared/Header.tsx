import React from 'react'
import '@/styles/navbar.css'

const Header = () => {
  return (
    <div className="flex w-full h-20 items-center justify-between px-16 bg-black text-white absolute z-10 bg-opacity-10">
      <div className="text-4xl logo-font">Moviet</div>
      <ul className="flex w-96 justify-between text-2xl">
        <li>Home</li>
        <li>Movies</li>
        <li>TV Series</li>
      </ul>
    </div>
  )
}

export default Header
