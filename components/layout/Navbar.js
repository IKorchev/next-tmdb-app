import { useState } from "react"
import Link from "next/link"
import { menuItems } from "../../utils/menuItems"
import { UserCircleIcon } from "@heroicons/react/solid"

const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <nav className='bg-gray-800 flex justify-between items-center lg:px-36 relative border-b-2'>
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
          className={`bg-blue-900 transform transition duration-900 origin-top-right lg:origin-top z-10 ${
            active ? "scale-100" : "scale-0"
          } flex-col bg-white absolute text-center top-15 right-0 md:w-56 rounded-sm shadow-lg py-1 focus:outline-none`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu-button'
          tabIndex='-1'>
          <Link href='#'>
            <a
              href='#'
              className='block p-4 text-lg hover:bg-gray-200'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-0'>
              Your Profile
            </a>
          </Link>
          <Link href='#'>
            <a
              href='#'
              className='block p-4 text-lg hover:bg-blue-100'
              role='menuitem'
              tabIndex='-1'
              id='user-menu-item-1'>
              Settings
            </a>
          </Link>
          <Link href='#'>
            <a
              href='#'
              className='block p-4 text-lg font-semibold hover:bg-blue-100'
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
