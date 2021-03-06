import Image from "next/image"
import router from "next/router"
import { truncateString } from "../utils/truncate"
import ThumbnailProgressBar from "./ThumbnailProgressBar"
import genres from "../utils/movieGenres"
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
    genre_ids,
  } = result

  // TMDB does not provide the name of the genre, only the ids
  const movieGenres = genres.filter((element) => genre_ids?.includes(element.id) || "")

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
        src={
          backdrop_path
            ? url + backdrop_path
            : poster_path
            ? url + poster_path
            : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1200px-No_image_3x4.svg.png"
        }
      />

      <div className='px-8 py-5 pb-5 relative'>
        <h2 className='text-3xl mt-2 font-bold'>
          {title || original_title || name || original_name}
        </h2>
        <div className='flex flex-wrap mb-5 mt-2'>
          {movieGenres.map(({ name, id }) => (
            <p
              key={id}
              className='bg-gray-200 inline-flex text-center text-black whitespace-nowrap text-xs px-2 mb-1 py-1 mr-3 rounded-full'>
              {name}
            </p>
          ))}
        </div>
        <p className='mb-3'>{truncateString(overview, 80)}</p>
        <button
          onClick={(e) => {
            e.preventDefault()
            router.push(`/movie/${id}`)
          }}
          className='cursor-pointer text-white p-2 rounded-md bg-gray-800 hover:bg-gray-900 hover:shadow-2xl transform active:scale-95 active:shadow-2xl'>
          More info
        </button>
        <ThumbnailProgressBar data={vote_average} className='absolute -top-7 right-3' />
      </div>
    </div>
  )
}

export default Thumbnail
