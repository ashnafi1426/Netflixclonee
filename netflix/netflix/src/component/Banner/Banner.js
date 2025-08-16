import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { requests } from '../../utils/request';
import "./banner.css";

const Banner = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                const results = request.data.results;
                
                if (!results || results.length === 0) {
                    throw new Error("No movies found");
                }

                const randomMovie = results[
                    Math.floor(Math.random() * results.length)
                ];
                setMovie(randomMovie);
            } catch (error) {
                setError(error.message);
                console.error("Banner Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    if (loading) return <div className="banner_loading">Loading banner...</div>;
    if (error) return <div className="banner_error">Error: {error}</div>;
    if (!movie) return <div className="banner_empty">No featured content</div>;

    return (
        <header className='banner' style={{
            backgroundImage: movie?.backdrop_path 
                ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                : 'linear-gradient(to right, #111, #555)',
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name || 'Untitled'}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <p className='banner_description'>
                    {truncate(movie?.overview, 150) || 'No description available'}
                </p>
            </div>
            <div className='banner_fadeBottom' />
        </header>
    );
};

export default Banner;
