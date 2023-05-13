import React, { Component } from 'react';
import Header from './Header/Header';
import MovieData from '../Movies/MoviesData'
import MoviesContainer from '../Movies/MoviesContainer'
import './App.css';
import '../Movies/MoviesContainer.css'
import SingleMovie from '../Movies/singleMovie'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clicked: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies, clicked: false }))
      // .then(err => this.setState({ err: err.message }))
  }

  viewMovie = (id) => {
    console.log('CHECKING', this.state.movies)
    const findMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({ movies: [findMovie], clicked: true})
  }

  render() {
    console.log('CHECK', this.state)
    return(
      <div className='App'>
        <Header />
        <main className='moviesContainer'>
          {(this.state.movies.length && !this.state.clicked) && <MoviesContainer viewMovie={this.viewMovie} movieDetails = { this.state.movies } />}
          {this.state.clicked && <SingleMovie filteredMovie={this.state.movies} />}
        </main>
      </div>
    )  
  }
}


export default App;
