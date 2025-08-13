import React, { useEffect, useState } from 'react'
import "./Row.css";
// import movieTrailer from movieTrailer;

// import axios from 'axios';
import axios  from '../../../utils/axios';
const Row = ({title,fetchurl,isLargRow}) => {
  const [movies,setmovie]=useState([]);
  const [trailerUrl,setTrailerUrl]=useState(" ");
  const base_url="https://image.tmdb.org/t/p/original";
  useEffect(()=>{
    (async()=>{
    try{
      console.log(fetchUrl)
      const request=await axios.get(`http://localhost:4000/api/${fetchUrl}`);
      console.log(request);
      setmovie(request.data.results);
    }catch(error){
      console.log('error',error)
    }
    })()
  },[fetchurl]);
  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer().then(()=>{
        console.log(url)
        const urlParams=newURLSearchParams(new URL(url).search)
        console.log(urlParams)
        console.log(urlParams.get('v'))
        setTrailerUrl(urlParams.get('v'));
            })
    }
  }
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
    },
  }
  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
      { movies?.map((movie,index)=>{
        <img key={index} src={'${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}'} alt={movie.name} className={'row_poster${isLargRow && "row_posterLarge"}'}
        />
      })}
      </div>
      {
        // <div style={{padding:'40px'}}>
        // {trailerUrl && <youTube videoId={trailerUrl} opts={opts}/>}
        // </div>
      }
    </div>
  )
}

export default Row;
