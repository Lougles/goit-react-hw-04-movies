import React from 'react';

const MovieCast = ({data}) => {
  return ( 
    <ul>
      {data.map(item => (
        <li className="ImageGallery" key={item.id}>
          <h3>{item.name}</h3>
          <img className="ImageGalleryItem-image" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} />
        </li>
      ))}
    </ul>
   );
}
 
export default MovieCast;