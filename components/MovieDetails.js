import Image from "next/image"
import ImdbIcon from "../assets/imdb.png"
import { ExternalLinkIcon } from "@heroicons/react/solid"
const MovieDetails = ({ data }) => {
  return (
    <div className='flex flex-col text-lg px-12'>
      <div className='flex justify-around mb-5 border-b'>
        {data.genres?.map((el) => (
          <span key={el.id}>{el.name}</span>
        ))}
      </div>
      <div>
        <h1 className='mb-5'>{data.original_title || data.title || data.name}</h1>
        <h2 className='mb-5'>{data.tagline}</h2>
        <div>
          <h3 className='font-semibold'>Movie overview</h3>
          <p>{data.overview}</p>
        </div>
        <div>
          <h3 className='font-semibold'>Production companies</h3>
          <div>
            {data.production_companies?.map((el) => (
              <span key={el.id}>{el.name}, </span>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-2'>
        <span>Year: {data.release_date.slice(0, 4)}</span>
        <span>Revenue: {data.revenue.toLocaleString()}</span>
      </div>
      <div className='flex flex-col align-center'>
        <a
          className='inline w-full font-bold text-gray-700 hover:text-black'
          href={data.homepage}
          target='_blank'
          rel='noreferrer'>
          Website <ExternalLinkIcon className='inline h-6 ml-2' />
        </a>
        <a
          href={`https://imdb.com/title/${data.imdb_id}` || "https://imdb.com/"}
          target='_blank'
          rel='noreferrer'
          className='h-6'>
          <Image alt='imdb' src={ImdbIcon} layout='fixed' width='55' height='55' />
        </a>
      </div>
    </div>
  )
}

export default MovieDetails
