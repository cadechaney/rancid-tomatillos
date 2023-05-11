import React from 'react'
import Movie from './Movie'

const MoviesContainer = ( {movieDetails} ) => {
    console.log(movieDetails)
    const movies = movieDetails.movies.map(movie => {
    return(
        <Movie 
            poster={movie.poster_path}
            key={Date.now}
        />
    )
 })
 return movies

}

export default MoviesContainer