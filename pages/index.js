import Results from "../components/Results"
import requests from "../utils/requests"

const Home = ({ jsonResult, genre }) => {
  return (
    <>
      <Results data={jsonResult} genre={genre} />
    </>
  )
}
export default Home

export const getServerSideProps = async (context) => {
  const genre = context.query.genre
  const page = context.query.page || 1
  const result = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending?.url
    }&page=${page}`
  )
  const jsonResult = await result.json()
  return {
    props: {
      jsonResult,
      genre: genre || "",
    },
  }
}
