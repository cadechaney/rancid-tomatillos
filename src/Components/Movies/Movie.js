import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = ({id, poster, viewMovie}) => {
  return(
    <Link to={`/${id}`} key={id}>
      <div className='link'>
        <img onClick={() => viewMovie(id)} className='poster' src={poster} ></img>
      </div>
    </Link>    
  )
}

export default Movie;