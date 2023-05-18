const fetchMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => res.json())
    .then(data => this.setState({ movies: data.movies, clicked: false }))
    .catch(() => {this.setState({err: 'Refresh Page'})})
}

const fetchAllMovies = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/`)
    .then(res => res.json())
    .then(data => this.setState({ movies: data.movies, clicked: false }))
    .catch(() => {this.setState({err: 'Refresh Page'})})   
}

export default { fetchMovie, fetchAllMovies }
