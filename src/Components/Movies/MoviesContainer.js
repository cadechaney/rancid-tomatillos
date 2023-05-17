import React from 'react'
import Movie from './Movie'
import { Link } from 'react-router-dom'

const MoviesContainer = ( {viewMovie, movieDetails} ) => {
  console.log('FIRING', movieDetails)
  const movies = movieDetails.map(movie => {
  return( 
    <Link to={`/${movie.id}`} key={movie.id}>
      <Movie id={movie.id} poster={movie.poster_path}viewMovie={viewMovie}/>
    </Link>       
  )})
  return movies
}

export default MoviesContainer