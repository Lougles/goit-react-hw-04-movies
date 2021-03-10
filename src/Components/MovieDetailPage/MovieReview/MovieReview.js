import React from 'react';

const MovieReview = ({data}) => {
  return ( 
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <h4>Author: {item.author}</h4>
          <p>{item.content }</p>
        </li>
      ))}
    </ul>
   );
}
 
export default MovieReview;