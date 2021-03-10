import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({qwerty, location}) => {
  return (
      qwerty.map(item => (
    <li className="ImageGallery" key={item.id}>
      <Link to={{
        pathname: `movies/${item.id}`,
        state: {
          from: location,
        }
          }} >
            <h1>{item.original_title}</h1>
            <img src={ `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }/>
          </Link>
    </li>
      ))
  )
}

export default withRouter(MoviesList);
