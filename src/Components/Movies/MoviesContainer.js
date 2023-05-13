import React from 'react'
import Movie from './Movie'

const MoviesContainer = ( {viewMovie, movieDetails} ) => {
    console.log('FIRING', movieDetails)
    const movies = movieDetails.map(movie => {
    return(
        <Movie 
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            viewMovie={viewMovie}
        />
    )
 })
 return movies

}

export default MoviesContainer