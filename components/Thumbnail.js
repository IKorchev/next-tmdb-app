import Image from "next/image"
import Link from "next/link"
import router from "next/router"
import { truncateString } from "../utils/truncate"
import ThumbnailProgressBar from "./ThumbnailProgressBar"
const Thumbnail = ({ result, parentRef }) => {
  const url = "https://image.tmdb.org/t/p/original"
  const {
    id,
    backdrop_path,
    poster_path,
    original_name,
    original_title,
    name,
    title,
    overview,
    vote_average,
  } = result

  return (
    <div className=' max-w-lg min-w-full shadow-2xl rounded-lg overflow-hidden'>
      <Image
        className='transition duration-500 transform hover:scale-105 cursor-pointer'
        width='1920'
        height='1080'
        alt='Movie Thumbnail'
        layout='responsive'
        onClick={(e) => {
          e.preventDefault()
          router.push(`/movie/${id}`)
        }}
        src={`${url}${backdrop_path || poster_path}`}
      />

      <div className='px-5 py-5 pb-5 relative'>
        <h2 className='my-2 font-bold'>
          {title || original_title || name || original_name}
        </h2>
        <p className='mb-3'>{truncateString(overview, 150)}</p>
        <button
          onClick={(e) => {
            e.preventDefault()
            router.push(`/movie/${id}`)
          }}
          className='cursor-pointer text-blue-500 hover:text-blue-900 py-2'>
          More info
        </button>
        <ThumbnailProgressBar
          data={vote_average}
          className='absolute -top-7 right-3'
        />
      </div>
    </div>
  )
}

export default Thumbnail
