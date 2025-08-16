import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_TMDB_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY, // Ensure this matches .env
    language: 'en-US'
  }
});

// Add request interceptor to verify the key is attached
instance.interceptors.request.use(config => {
  if (!config.params.api_key) {
    console.error('API key missing in request!');
    throw new Error('TMDB API key not provided');
  }
  return config;
});

export default instance;
