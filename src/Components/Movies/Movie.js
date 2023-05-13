import React from 'react'
import './Movie.css'


const Movie = ({id, poster, viewMovie}) => {
  return(
    <img onClick={() => viewMovie(id)} className='poster' src={poster} ></img>
  )
}

export default Movie;