import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList'


class Home extends Component {
   state = {
    movies: [],
  }

  async componentDidMount() {
    const res = await axios.get
      (`https://api.themoviedb.org/3/trending/movie/day?api_key=bba7303c828c3524795e51153ba4099b`);
    this.setState({movies: res.data.results})
  }
  render() {
    const { movies } = this.state;
    return (
      <>
          <h1>Treding today</h1>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`movies/${item.id}`} >{item.original_title}</Link>
          </li>
        ))}
      </>
    )
  }
}

export default Home;