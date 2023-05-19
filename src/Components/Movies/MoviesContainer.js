import React from 'react'
import Movie from './Movie'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const MoviesContainer = ( {viewMovie, movieDetails} ) => {
  const movies = movieDetails.map(movie => {
  return( 
      <Movie key={movie.id} id={movie.id} poster={movie.poster_path}viewMovie={viewMovie}/>
  )})
  return movies
}

MoviesContainer.propTypes = {
  viewMovie: PropTypes.func.isRequired,
  movieDetails: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      runtime: PropTypes.number,
      release_date: PropTypes.string,
      overview: PropTypes.string
    }).isRequired 
  )
}

export default MoviesContainer
