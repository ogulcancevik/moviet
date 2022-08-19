import React from 'react'
import { links } from './links'
import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full h-20 items-center justify-between md:justify-center px-16 bg-black text-white absolute z-10 bg-opacity-10">
      <div className="text-4xl logo-font">Moviet</div>
      <ul className="flex w-96 justify-between text-xl md:hidden">
      {
        links.map((link, key) => {
          return <li className='cursor-pointer' onClick={() => {
            navigate(link.path)
          }} key={key}>{link.name}</li>
        })
      }
      </ul>
    </div>
  )
}

export default Header
