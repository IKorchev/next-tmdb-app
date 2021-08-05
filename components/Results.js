import { useRouter } from "next/router"
import Thumbnail from "./Thumbnail"
import { capitalize } from "../utils/truncate"
import Head from "next/head"
import Pagination from "./Pagination"
const Results = ({ data, genre }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Moovy | {capitalize(genre)}</title>
      </Head>
      
      <div className='container px-4 sm:px-8 lg:px-24 mx-auto'>
        <h1 className='capitalize text-center p-5'>
          {genre !== "TV" ? `${genre} Movies` : `${genre} series`}
        </h1>
        <div className='grid gap-12 grid-flow-row grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 mx-auto justify-items-center'>
          {data.results.map((el, i) => (
            <Thumbnail key={el.id} result={el} />
          ))}
        </div>
        {
          /* make sure we are not on the home page */
          router.asPath !== "/" && <Pagination pagesCount={data.total_pages} />
        }
      </div>
    </>
  )
}

export default Results
