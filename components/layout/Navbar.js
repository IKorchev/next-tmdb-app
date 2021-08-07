import { useState } from "react"
import Link from "next/link"
import { menuItems } from "../../utils/menuItems"
import { UserCircleIcon } from "@heroicons/react/solid"

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='bg-gray-800 border-b-2'>
      <div className='container flex justify-between items-center lg:px-36 relative mx-auto'>
        <h1 className='hidden lg:block text-white cursor-default'>Moovy</h1>
        <div className='flex flex-row text-gray-200 '>
          {menuItems.map((el, i) => (
            <Link key={el.label} href={el.url} passHref>
              <a className='nav-link lg:mx-12'>{el.label}</a>
            </Link>
          ))}
        </div>
        <div className='relative'>
          <a
            className='nav-link flex flex-col items-center'
            onClick={(e) => {
              e.preventDefault()
              setActive((state) => !state)
            }}
            href=''>
            <UserCircleIcon className='h-10 w-10 text-white' />
          </a>
          <div
            className={`bg-gray-700 transform transition duration-900 origin-top-right z-10 ${
              active ? "scale-100" : "scale-0"
            } flex-col absolute w-96 text-center text-white top-3/4 right-1/2 md:w-56 rounded-xl shadow-lg py-1 focus:outline-none`}
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='user-menu-button'
            tabIndex='-1'>
            <a
              href='#'
              className='block p-4 text-lg hover:bg-gray-200 hover:text-gray-900'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-0'>
              Your Profile
            </a>
            <a
              href='#'
              className='block p-4 text-lg hover:bg-gray-200 hover:text-gray-900'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-1'>
              Settings
            </a>
            <a
              href='#'
              className='block p-4 text-lg font-semibold hover:bg-gray-200 hover:text-gray-900'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-2'>
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
