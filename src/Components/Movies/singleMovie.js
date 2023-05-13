import React from 'react'
import PropTypes from 'prop-types'

const SingleMovie = ({filteredMovie, returnHome}) =>  {
  console.log('filtered', filteredMovie)
    return (
      <div className='single-movie' >
        <img className='single-poster' src={filteredMovie.backdrop_path} ></img>
        <div className='text-details'>
          <p>{filteredMovie.title}</p>
          <p>{filteredMovie.average_rating}</p>
          <p>{filteredMovie.budget}</p>
          <p>{filteredMovie.overview}</p>
          <p>{filteredMovie.runtime}</p>
          <p>{filteredMovie.release_date}</p>
          <button onClick={() => returnHome()} >Return</button>
        </div>
      </div>
    )
  }

  SingleMovie.propTypes = {
    filteredMovie: PropTypes.object.isRequired
    
  }
  
  export default SingleMovie;
  

