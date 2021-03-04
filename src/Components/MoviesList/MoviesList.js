import React from 'react';

const MovieList = ({movies}) => {
  return ( 
    <ul>
      {movies.map(item => {
        <li key={item.id}>
          <a>{ item.original_title }</a>
        </li>
      })}
    </ul>
   );
}
 
export default MovieList;