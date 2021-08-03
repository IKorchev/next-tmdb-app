import Image from "next/image"
import Link from "next/link"
import router from "next/router"
import { truncateString } from "../utils/truncate"
import gsap from "gsap"
const Thumbnail = ({ result, parentRef }) => {
  const url = "https://image.tmdb.org/t/p/original"
  return (
    <div className='max-w-lg min-w-full shadow-2xl rounded-lg overflow-hidden'>
      <Image
        className='transition duration-500 transform hover:scale-105 cursor-pointer'
        width='1920'
        height='1080'
        alt='Movie Thumbnail'
        layout='responsive'
        onClick={(e) => {
          e.preventDefault()
          router.push(`/movie/${result.id}`)
        }}
        src={`${url}${result.backdrop_path || result.poster_path}`}
      />

      <div className='px-5 py-2 pb-5'>
        <h2 className='my-2 font-bold'>
          {result.title || result.original_title || result.name || result.original_name}
        </h2>
        <p className='mb-3'>{truncateString(result.overview, 150)}</p>
        <button
          onClick={(e) => {
            e.preventDefault()
            router.push(`/movie/${result.id}`)
          }}
          className='cursor-pointer text-blue-500 hover:text-blue-900 py-2'>
          More info
        </button>
      </div>
    </div>
  )
}

export default Thumbnail
