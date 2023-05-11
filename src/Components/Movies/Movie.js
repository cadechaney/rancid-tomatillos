import React from 'react'
import './Movie.css'

const Movie = ({poster}) => {
  return(
    // <div className='poster' >{poster}</div>
    <img className='poster' src={poster} ></img>
  )
}

export default Movie;