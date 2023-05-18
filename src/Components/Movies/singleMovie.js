import React from 'react'
import PropTypes from 'prop-types'
import './singleMovie.css'
import { Link } from 'react-router-dom'

const SingleMovie = ({filteredMovie, returnHome}) =>  {
  console.log('filtered', filteredMovie)
  console.log('filtered', filteredMovie?.backdrop_path)
    return (
      <div className='single-movie' >
        <img className='single-poster' src={filteredMovie.backdrop_path}></img>
        <div className='text-details'>
          <p className='title'>{filteredMovie.title}</p>
          <div className='movie-specs'>
            <p className='rating'>Rating: {filteredMovie.average_rating} {' '}</p>
            <p className='runtime'>Runtime: {filteredMovie.runtime} min{' '}</p>
            <p className='release'>Release: {filteredMovie.release_date}{' '}</p>
          </div>
          <p className='overview'>{filteredMovie.overview}</p>
          <Link to={'/'}>
            <button>Return</button>
          </Link>
        </div>
      </div>
    )
  }

  SingleMovie.propTypes = {
    filteredMovie: PropTypes.object.isRequired
    
  }
  
  export default SingleMovie;
  

