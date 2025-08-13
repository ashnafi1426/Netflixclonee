import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/request';
// import Button from '@mui/material/Button';
import  "./banner.css";
const Banner = () => {
    const [movie,setmovie]=useState({})
    useEffect(()=>{
        (async()=>{
            try{
                const request=await axios.get(requests.fetchNetflixOriginals)
                console.log(request);
                setmovie(request.data.results[Math.floor(Math.random()*requests.data.results.length)]);
            }catch (error){
          console.log("error",error);
            }
        })()
    },[])
    function truncate(str,n){
        return str?.length>n?str.substr(0,n-1)+'...':str;
    }
  return (
    <div className='banner'
     style={{
        backgroundSize:"cover",
        backgroundImage:`url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` ,
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
            <h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
        </div>
       <div className='banner_fadeBottom'/>
    </div>
  )
}
export default Banner;
