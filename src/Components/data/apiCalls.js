const fetchMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
}

const fetchAllMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(res => res.json())   
}

export { fetchMovie, fetchAllMovies }
