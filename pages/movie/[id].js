import Head from "next/head"

import { useEffect, useRef } from "react"
import MovieDetails from "../../components/MovieDetails"
const Movie = ({ data }) => {
  const ref = useRef()
  // Movie genres
  useEffect(() => {
    // gsap.from(ref.current, {
    //   x: "100%",
    // })
  }, [])
  return (
    <>
      <Head>
        <title>{data.original_title || data.name} | Moovy</title>
        <meta name='description' content={data.overview} />
      </Head>
      <div className='bg-gray-100 mx-auto py-5 px-12 lg:px-0'>
        <div ref={ref} className='mx-auto xl:max-w-6xl grid grid-cols-1 lg:grid-cols-2'>
          <div className='lg:px-12 mb-5'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='object-cover'
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt='Movie poster'
            />
          </div>
          <MovieDetails data={data} />
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
