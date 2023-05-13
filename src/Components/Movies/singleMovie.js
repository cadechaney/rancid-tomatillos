import React from 'react'


const SingleMovie = (filteredMovie) => {
  return (
    <div>
      <img className='single-poster' src={filteredMovie.filteredMovie[0].backdrop_path} ></img>
      <div>
        <p>{filteredMovie.filteredMovie[0].title}</p>
        <p>{filteredMovie.filteredMovie[0].average_rating}</p>
      </div>
    </div>
  )
}

export default SingleMovie;