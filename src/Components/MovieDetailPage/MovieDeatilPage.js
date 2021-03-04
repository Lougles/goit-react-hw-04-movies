import axios from 'axios';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class MovieDetailPage extends Component {
  state = {
    original_title: null,
    backdrop_path: null,
    overview: null,
    genres: [],
  }
  async componentDidMount() {
    const movieid = this.props.match.params.movieId;
    const res = await axios.get
      (`https://api.themoviedb.org/3/movie/${movieid}?api_key=bba7303c828c3524795e51153ba4099b`);
    // this.setState({ genres: res.data });
    this.setState({ ...res.data });
  }
  render() {
    // console.log(this.state.genres);
    const {genres, overview, backdrop_path, poster_path, original_title} = this.state;
    console.log(genres);
    console.log(genres.name);
    const qwer = genres.name;
    console.log(qwer);

    return ( 
      <div>
        <div>
          {/* <h1>MovieDetailPage - {this.props.match.params.movieId}</h1> */}
          <button type="button">Back</button>
          <img src={backdrop_path} alt=""/>
          <h1>{original_title}</h1>
          <h3>Overview</h3>
          <p>{ overview }</p>
          <h3>Genres</h3>
          <p>{ genres.name }</p>
        </div>
        {/* <ul>
          <li>
            <Link to="/movies/:moviesId">case</Link>
          </li>
        </ul>
        <Route path="/movies/:moviesId"
        render={() => <h1>QWERTY</h1>}
        /> */}
      </div>
    );
  }
}
 
export default MovieDetailPage;