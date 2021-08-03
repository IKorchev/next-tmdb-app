import { useState } from "react"
import Link from "next/link"
import { menuItems } from '../../utils/menuItems'
import { UserCircleIcon } from "@heroicons/react/solid"

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='bg-white  max-w-screen-2xl mx-auto px-5 flex justify-between items-center lg:px-24 relative'>
      <h1 className='hidden lg:block text-black cursor-default'>Moovy</h1>
      <div className='flex flex-row text-gray-200 '>
        {menuItems.map((el, i) => (
          <Link key={el.label} href={el.url} passHref>
            <a className='nav-link lg:mx-12'>{el.label}</a>
          </Link>
        ))}
      </div>
      <div>
        <a
          className='nav-link flex flex-col items-center'
          onClick={(e) => {
            e.preventDefault()
            setActive((state) => !state)
          }}
          href=''>
          <UserCircleIcon className='h-10 w-10 text-gray-800' />
        </a>
        <div
          className={`transform transition-transform transition-duration-500 origin-top-right lg:origin-top z-10 ${
            active ? "scale-100" : "scale-0"
          } d-flex  flex-col bg-white absolute text-center top-14 right-0 w-full md:w-56 rounded-sm shadow-lg py-1 focus:outline-none`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu-button'
          tabIndex='-1'>
          <Link href='#'>
            <a
              href='#'
              className='block  p-4 text-lg md:text-sm text-gray-700 hover:bg-blue-100'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-0'>
              Your Profile
            </a>
          </Link>
          <Link href='#'>
            <a
              href='#'
              className='block p-4 text-lg md:text-sm text-gray-700 hover:bg-blue-100'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-1'>
              Settings
            </a>
          </Link>
          <Link href='#'>
            <a
              href='#'
              className='block p-4 text-lg md:text-sm text-gray-700 hover:bg-blue-100'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-2'>
              Sign out
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
