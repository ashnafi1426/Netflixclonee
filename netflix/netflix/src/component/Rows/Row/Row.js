import React, { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import "./row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        
        if (!isMounted) return;
        
        if (!response.data?.results) {
          throw new Error("Invalid data structure");
        }

        setMovies(response.data.results.filter(movie => movie.poster_path));
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.error("Row Error:", {
            url: fetchUrl,
            error: err.message,
            response: err.response?.data
          });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    
    fetchData();
    
    return () => { isMounted = false };
  }, [fetchUrl]);

  const getImagePath = (movie) => {
    const path = isLargeRow ? movie.poster_path : movie.backdrop_path;
    return path 
      ? `https://image.tmdb.org/t/p/w500${path}`
      : 'https://via.placeholder.com/500x280?text=No+Image';
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      
      {loading ? (
        <div className="row__loading">Loading...</div>
      ) : error ? (
        <div className="row__error">Error: {error}</div>
      ) : movies.length === 0 ? (
        <div className="row__empty">No movies available</div>
      ) : (
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={getImagePath(movie)}
              alt={movie.title || movie.name || "Movie"}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x280?text=Image+Error';
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;