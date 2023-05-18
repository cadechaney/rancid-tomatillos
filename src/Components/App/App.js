import React, { Component } from 'react';
import { fetchMovie, fetchAllMovies } from '../data/apiCalls.js'
import Header from '../Header/Header';
import MoviesContainer from '../Movies/MoviesContainer'
import './App.css';
import '../Movies/MoviesContainer.css'
import SingleMovie from '../Movies/singleMovie'
import { Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      clicked: false,
      singleMovieDetails: {},
      err: ''
    }
  }

  componentDidMount() {
    fetchAllMovies()
  }

  viewMovie = (id) => {
    console.log('CHECKING', this.state.movies)
    const findMovie = this.state.movies.find(movie => movie.id === id)
    fetchMovie(findMovie.id)
  }

  render() {
    if(this.state.err === 'Refresh Page') {
      return (<h1>Refresh Page</h1>)
    }
    return(
      <>
        <Header />
        <main>
          <Switch>
            <Route path='/:id' render={({ match }) => <SingleMovie filteredMovie={this.state.singleMovieDetails} returnHome={this.returnHome} key ={match.params.id} id={match.params.id} />} />
            <Route path='/' render={() => <MoviesContainer className='movies-container' viewMovie={this.viewMovie} movieDetails = { this.state.movies } />} />
          </Switch>
        </main>
      </>
    )
  }
}

export default App;
