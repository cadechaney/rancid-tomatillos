import React from 'react'
import Movie from './Movie'

const MoviesContainer = ( {movieDetails} ) => {
    const movies = movieDetails.movies.map(movie => {
    return(
        <Movie 
            poster={movie.poster_path}
        />
    )
 })
}

export default MoviesContainer