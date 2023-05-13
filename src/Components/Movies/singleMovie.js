import React from 'react'


const SingleMovie = ({filteredMovie, returnHome}) => {
  return (
    <div className='single-movie' >
      <img className='single-poster' src={filteredMovie[0].backdrop_path} ></img>
      <div className='text-details'>
        <p>{filteredMovie[0].title}</p>
        <p>{filteredMovie[0].average_rating}</p>
        <button onClick={() => returnHome()} >Return</button>
      </div>
    </div>
  )
}

export default SingleMovie;