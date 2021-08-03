const API_KEY = process.env.API_KEY

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  action: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  horror: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  mystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  sciFi: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  western: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  TV: {
    title: "TV Series",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
}
