import Genres from "../components/Genres"
import Results from "../components/Results"
import requests from "../utils/requests"
const Home = ({ jsonResult, genre }) => {
  return (
    <>
      <Genres />
      <Results results={jsonResult.results} genre={genre} />
    </>
  )
}
export default Home

export const getServerSideProps = async (context) => {
  const genre = context.query.genre
  const result = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.trending.url}`
  )
  const jsonResult = await result.json()
  return {
    props: {
      jsonResult,
      genre: genre || "Trending",
    },
  }
}
