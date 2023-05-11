import React, { Component } from 'react';
import Header from './Header/Header';
import MovieData from '../Movies/MoviesData'
import MoviesContainer from '../Movies/MoviesContainer'
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  render() {
    return(
    <main className='App'>
      <Header />
      <MoviesContainer movieDetails = { MovieData } />
    </main>
    )  
  }
}


export default App;
