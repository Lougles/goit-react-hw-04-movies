import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';

class MovieSearch extends Component {
  state = {
    input: '',
    movies: [],
  }
  componentDidUpdate() {
    
  }
    handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ input: value });
  };
    onSubmit = event => {
    event.preventDefault();
    this.handleSearch(this.state.input);
    this.setState({ input: '' });
  }
  handleSearch = async() => {
    this.props.history.push({
      pathname: '/movies',
      search: `?query=${this.state.input}`
    })
      const res = await axios.get
      (`https://api.themoviedb.org/3/search/movie?api_key=bba7303c828c3524795e51153ba4099b&query=${this.state.input}`);
    console.log(res);
    this.setState({movies: res.data.results})
  }
  render() {
    const { input, movies } = this.state;
    return (
    <div>
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"></span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            value={input}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search Movie"
          />
        </form>
      </div>
        <ul>
          {movies.length > 0 && 
          <MoviesList
            qwerty={movies}
          />
          }
        </ul>
    </div>
     );
  }
}
 
export default MovieSearch;