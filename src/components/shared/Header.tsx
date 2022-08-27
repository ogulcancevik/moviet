import React from 'react'
import { links } from './links'
import { NavLink, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAppDispatch } from '@/app/store'
import { TOGGLE_MENU } from '@/app/global'
const Header: React.FC = () => {
  const location = useLocation()
  return (
    <div
      className={`flex w-full h-20 items-center justify-between md:justify-center px-16 bg-black text-white ${
        location.pathname !== '/collection' && 'absolute'
      } z-10 bg-opacity-10`}
    >
      <div className="text-4xl logo-font">Moviet</div>
      <div className="md:flex hidden ml-auto">
        <Hamburger />
      </div>
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

export const Hamburger: React.FC = () => {
  const dispatch = useAppDispatch()
  const toggleMenu = () => {
    dispatch(TOGGLE_MENU())
  }
  return (
    <div className="md:flex hidden ml-auto text-4xl">
      <GiHamburgerMenu onClick={toggleMenu} />
    </div>
  )
}
