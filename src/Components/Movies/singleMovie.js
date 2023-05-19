import React from 'react'
import PropTypes from 'prop-types'
import './singleMovie.css'
import { Link } from 'react-router-dom'

const SingleMovie = ({filteredMovie}) =>  {
    return (
      <div className='single-movie' >
        <img className='single-poster' src={filteredMovie.backdrop_path}></img>
        <div className='text-details'>
          <h2 className='title'>{filteredMovie.title}</h2>
          <h3 className='overview'>{filteredMovie.overview}</h3>
          <div className='movie-specs'>
            <h3 className='rating'>Rating: {filteredMovie.average_rating} {' '}</h3>
            <h3 className='runtime'>Runtime: {filteredMovie.runtime} min{' '}</h3>
            <h3 className='release'>Release: {filteredMovie.release_date}{' '}</h3>
          </div>
          <Link to={'/'}>
            <button>View More Movies</button>
          </Link>
        </div>
      </div>
    )
  }

  SingleMovie.propTypes = {
    filteredMovie: PropTypes.shape({
      backdrop_path: PropTypes.string,
      title: PropTypes.string,
      average_rating: PropTypes.number,
      runtime: PropTypes.number,
      release_date: PropTypes.string,
      overview: PropTypes.string
    }).isRequired 
  }
  
  export default SingleMovie;
  

