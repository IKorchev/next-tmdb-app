import Image from "next/image"
import Link from "next/link"
import router from "next/router"
import { truncateString } from "../utils/truncate"
const Thumbnail = ({ result }) => {
  const url = "https://image.tmdb.org/t/p/original"
  return (
    <div className='max-w-lg m-3 shadow-2xl rounded-lg overflow-hidden'>
      <Image
        className='transition duration-500 transform hover:scale-105 cursor-pointer'
        width='1920'
        height='1080'
        alt='Movie Thumbnail'
        layout='responsive'
        onClick={() => {
          router.push(`/movie/${result.id}`)
        }}
        src={`${url}${result.backdrop_path || result.poster_path}`}
      />

      <div className='px-5 py-2'>
        <h1 className='my-2'>
          {result.title || result.original_title || result.name || result.original_name}
        </h1>
        <p>{truncateString(result.overview, 150)}</p>
      </div>
      <Link href={`/movie/${result.id}`}>Learn more</Link>
    </div>
  )
}

export default Thumbnail
