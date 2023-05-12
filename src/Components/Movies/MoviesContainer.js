import React from 'react'
import Movie from './Movie'

const MoviesContainer = ( {viewMovie, movieDetails} ) => {
    console.log(movieDetails)
    console.log(movieDetails.movies)
    const movies = movieDetails.movies.map(movie => {
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