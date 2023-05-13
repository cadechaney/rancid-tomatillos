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
      movies: MovieData,
      clicked: false
    }
  }

  viewMovie = (id) => {
    const findMovie = this.state.movies.movies.find(movie => movie.id === id)
    console.log(findMovie)
    this.setState({ movies: [findMovie], clicked: true})
  }

  render() {
    return(
      <div className='App'>
        <Header />
        <main className='moviesContainer'>
          {!this.state.clicked && <MoviesContainer viewMovie={this.viewMovie} movieDetails = { this.state.movies } />}
          {this.state.clicked && <SingleMovie filteredMovie={this.state.movies} />}
        </main>
      </div>
    )  
  }
}


export default App;
