import axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MovieCast from './MovieCast/MovieCast';
import MovieReview from './MovieReview/MovieReview';

class MovieDetailPage extends Component {
  state = {
    original_title: null,
    backdrop_path: null,
    overview: null,
    genres: [],
    cast: [],
    review: [],
  }
  async componentDidMount() {
    const movieid = this.props.match.params.movieId;
    const res = await axios.get
      (`https://api.themoviedb.org/3/movie/${movieid}?api_key=bba7303c828c3524795e51153ba4099b`);
    this.setState({ ...res.data });
    const review = await axios.get
      (`https://api.themoviedb.org/3/movie/${movieid}/reviews?api_key=bba7303c828c3524795e51153ba4099b`);
    this.setState({ review: review.data.results })
    const cast = await axios.get
      (`https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=bba7303c828c3524795e51153ba4099b`)
    this.setState({ cast: cast.data.cast })
  }
  componentDidUpdate() {

  }
  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location.state?.from ?? '/')
  }
  render() {
    const { match } = this.props;
    const { genres, overview, poster_path, original_title, review, cast } = this.state;
    return ( 
      <div>
        <div>
          <button className="Button" type="button" onClick={this.handleGoBack}>Back</button>
          <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
          <h1>{original_title}</h1>
          <h3>Overview</h3>
          <p>{ overview }</p>
          <h3>Genres</h3>
          {genres.map(item => (
            < p > {item.name} </p>
          ))}
        </div>
          <ul>
            <li key={'cast'}>
            <NavLink to={{
              pathname: `${match.url}/cast`,
              state: {
                from: this.props.location.state?.from,
              }
            }}>Cast</NavLink>
            </li>
            <li key={'review'}>
            <NavLink to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: this.props.location.state?.from,
              }
              }}>Reviews</NavLink>
            </li>
          </ul>
        <Route path={`${match.url}/cast`} render={(props) => <MovieCast {...props} data={cast} />} />
        <Route path={`${match.url}/reviews`} render={(props) => <MovieReview {...props} data={review} />} />
      </div>
    );
  }
}
 
export default MovieDetailPage;