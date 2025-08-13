const API_KEY="52b3b6d001e9cae374c67a4f8a07673c";
const requests = {
  fetchTrending: `"trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&page=1&timezone=%20Europe%2FIstanbul&with_networks=213`,
  fetchHistoryMovies: `discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchAnimationMovies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasyMovies: `discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
};
export default requests;