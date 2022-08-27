import { TOGGLE_MENU } from '@/app/global'
import { useAppDispatch } from '@/app/store'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from './links'
const Menu: React.FC = () => {
  const dispatch = useAppDispatch()
  const toggleMenu = () => {
    dispatch(TOGGLE_MENU())
  }
  return (
    <div className="bg-black text-white absolute left-0 right-0 bottom-0 top-0 flex justify-center items-center z-50 w-1/2">
      <div className='flex flex-col text-3xl gap-4' onClick={toggleMenu}>
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
      </div>
    </div>
  )
}

export default Menu
