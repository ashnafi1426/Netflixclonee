import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../utils/request';
import Button from '@mui/material/Button';
import css from "./banner.css";
const Banner = () => {
    const [movie,setmovie]=useState({})
    useEffect(()=>{
        (async()=>{
            try{
                const requests=await axios.get(requests.fetchNetflixOriginals)
                console.log(requests);
                setmovie(requests.data.results[Math.floor(Math.random()*requests.data.results.length)]);

            }catch (error){
          console.log("error",error);
            }
        })()
    },[])
  return (
    <div className='banner'
     style={{
        backgroundSize:"cover",
        backgroundImage:"url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})" ,
        backgroundPosition:"center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>
                {movie?.title||movie?.name||movie?.original}
            </h1>
            <div className='banner_button'>
                <button className='banner_button play'>play</button>
                <button className='banner_button'>My list</button>
            </div>
            {/* <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1> */}
        </div>
       <div className='banner_fadeBottom'/>
    </div>
  )
}

export default Banner
