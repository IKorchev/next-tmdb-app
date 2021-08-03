import Image from "next/image"
import Head from "next/head"
import ImdbIcon from "../../assets/imdb.png"
import { ExternalLinkIcon } from "@heroicons/react/solid"
const Movie = ({ data }) => {
  // Movie genres

  return (
    <>
      <Head>
        <title>{data.original_title || data.name}</title>
        <meta name='description' content={data.overview} />
      </Head>
      <div className='h-screen w-full mx-auto grid grid-cols-2 mt-5'>
        <div className='relative h-full'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://image.tmdb.org/t/p/original${
              data.poster_path || data.backdrop_path
            }`}
            alt='Movie poster'
          />
        </div>
        <div className='flex flex-col px-12 bg-gray-100 text-lg '>
          <div>
            <h2>Genre</h2>
            {data.genres?.map((el) => (
              <span key={el.id}>{el.name}</span>
            ))}
          </div>
          <div>
            <a
              className='flex items-center font-bold text-gray-700 hover:text-black'
              href={data.homepage}
              target='_blank'
              rel='noreferrer'>
              Website
              <ExternalLinkIcon className='h-6 ml-2' />
            </a>
            <a
              href={`https://imdb.com/title/${data.imdb_id}` || "https://imdb.com/"}
              target='_blank'
              rel='noreferrer'
              className='h-6'>
              <Image alt='imdb' src={ImdbIcon} layout='fixed' width='50' height='50' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie

export const getServerSideProps = async (context) => {
  const API_KEY = process.env.API_KEY
  const result = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${API_KEY}`
  )
  const data = await result.json()
  return {
    props: {
      data,
      revalidate: 1,
    },
  }
}
