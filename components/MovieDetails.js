import Image from "next/image"
import ImdbIcon from "../assets/imdb.png"
import { ExternalLinkIcon } from "@heroicons/react/solid"
const MovieDetails = ({ data }) => {
  return (
    <div className='flex flex-col text-lg lg:px-12'>
      <div className='flex flex-wrap justify-start mb-5 border-b'>
        {data.genres?.map((el) => (
          <span className='mx-2' key={el.id}>
            {el.name}
          </span>
        ))}
      </div>
      <div>
        <h1 className='mb-3 text-5xl flex-grow'>
          {data.original_title || data.title || data.name}
        </h1>
        <h2 className='mb-8 text-xl'>{data.tagline}</h2>
        <div>
          <h3 className='font-semibold'>Movie overview</h3>
          <p className='text-md leading-6 mt-2'>{data.overview}</p>
        </div>
        <div>
          <h3 className='font-semibold mt-8'>Production companies</h3>
          <div>
            {data.production_companies?.map((el) => (
              <span key={el.id} className='mr-3'>
                {el.name},
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-12'>
        <span>Year: {data.release_date.slice(0, 4)}</span>
        <span>
          Revenue: {data.revenue > 0 ? `$${data.revenue.toLocaleString()}` : "Unknown"}
        </span>
      </div>
      <div className='flex flex-row align-center mt-2'>
        <a
          className='font-bold flex-grow text-gray-700 hover:text-black'
          href={data.homepage}
          target='_blank'
          rel='noreferrer'>
          Website <ExternalLinkIcon className='inline h-6 ml-1' />
        </a>
        <a
          href={`https://imdb.com/title/${data.imdb_id}` || "https://imdb.com/"}
          target='_blank'
          rel='noreferrer'
          className='h-6 -mt-4'>
          <Image alt='imdb' src={ImdbIcon} layout='fixed' width='55' height='55' />
        </a>
      </div>
    </div>
  )
}

export default MovieDetails
