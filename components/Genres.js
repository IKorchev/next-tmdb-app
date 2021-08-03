import requests from "../utils/requests"
import { useRouter } from "next/router"
const Genres = () => {
  const router = useRouter()
  return (
    <div className='relative bg-gray-800 '>
      <div
        id='genres-wrapper'
        className='flex max-w-screen-2xl mx-auto border-b p-2 text-gray-100  border-bottom border-black justify-start lg:justify-center lg:px-5 lg:mx-auto  overflow-x-auto scrollbar scrollbar-thumb-blue-100 scrollbar-track-gray-800 scrollbar-thumb-w-2'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <button
            onClick={() => {
              router.push(`/?genre=${key}`)
            }}
            key={title}
            className='whitespace-nowrap text-lg font-semibold p-3 mx-5 transition duration-400 ease-in md:transform md:hover:scale-110 md:hover:text-white'>
            {title}
          </button>
        ))}
        <div className='absolute h-full w-6 top-0 right-0 bg-gradient-to-l from-gray-800'></div>
        <div className='absolute h-full w-6 top-0 left-0 bg-gradient-to-r from-gray-800'></div>
      </div>
    </div>
  )
}

export default Genres
