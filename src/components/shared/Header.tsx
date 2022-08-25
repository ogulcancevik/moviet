import React from 'react'
import { links } from './links'
import { NavLink, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <div
      className={`flex w-full h-20 items-center justify-between md:justify-center px-16 bg-black text-white ${
        location.pathname !== '/collection' && 'absolute'
      } z-10 bg-opacity-10`}
    >
      <div className="text-4xl logo-font">Moviet</div>
      <ul className="flex w-96 justify-between text-xl md:hidden">
        {links.map((link, key) => {
          return (
            <NavLink
              className={({ isActive }) => (isActive ? 'text-custom-red' : '')}
              to={link.path}
              key={key}
            >
              {link.name}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default Header
