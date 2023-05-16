import React, { Component } from 'react';
import Header from './Header/Header';
import MoviesContainer from '../Movies/MoviesContainer'
import './App.css';
import '../Movies/MoviesContainer.css'
import SingleMovie from '../Movies/singleMovie'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clicked: false,
      singleMovieDetails: [],
      err: ''
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies, clicked: false }))
      .catch(() => {this.setState({err: 'Refresh Page'})})
  }

  viewMovie = (id) => {
    console.log('CHECKING', this.state.movies)
    const findMovie = this.state.movies.find(movie => movie.id === id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${findMovie.id}`)
    .then(response => response.json())
    .then(data => this.setState({clicked: true, singleMovieDetails: data.movie}))
  }

  returnHome() {
    console.log('YOOO')
    window.location.reload(false)
  }

  render() {
    console.log('CHECK', this.state)
    
    return(
      <div className='App'>
        <Header />
        <main className='moviesContainer'>
          {this.state.err === 'Refresh Page' && <h1>Refresh Page</h1>}
          {(this.state.movies.length && !this.state.clicked) && <MoviesContainer className='movies-container' viewMovie={this.viewMovie} movieDetails = { this.state.movies } />}
          {this.state.clicked && <SingleMovie filteredMovie={this.state.singleMovieDetails} returnHome={this.returnHome} />}
        </main>
      </div>
    )  
  }
}


export default App;
