import React from 'react';
import PropTypes from 'prop-types';

import './Details.scss';

export const Details = (
  {
    abilities,
    sprite,
    name,
    id,
    baseExperience,
    types,
    weight,
    height,
    stats,
    moves,
    location,
    gameIndices,
  },
) => (!abilities || (
  <div className="details">
    <div className="details__image-container">
      <img
        className="details__image"
        src={sprite}
        alt="Pokemon"
      />
    </div>
    <div className="details__content">
      <p className="details__title">{name}</p>
      <div className="content">
        <p>
          <strong>ID: </strong>
          {id}
        </p>
        <p>
          <strong>Height: </strong>
          {height}
        </p>
        <p>
          <strong>Weight: </strong>
          {weight}
        </p>
        <p>
          <strong>Base Experience: </strong>
          {baseExperience}
        </p>
      </div>
    </div>
  </div>
)
);

// Preview.propTypes = {
//   Title: PropTypes.string.isRequired,
//   Poster: PropTypes.string,
//   Actors: PropTypes.string,
//   Awards: PropTypes.string,
//   Country: PropTypes.string,
//   Director: PropTypes.string,
//   Genre: PropTypes.string,
//   Language: PropTypes.string,
//   Plot: PropTypes.string,
//   Production: PropTypes.string,
//   Released: PropTypes.string,
//   Runtime: PropTypes.string,
//   Writer: PropTypes.string,
//   imdbRating: PropTypes.string,
//   imdbVotes: PropTypes.string,
// };

// Preview.defaultProps = {
//   Poster: '',
//   Actors: '',
//   Awards: '',
//   Country: '',
//   Director: '',
//   Genre: '',
//   Language: '',
//   Plot: '',
//   Production: '',
//   Released: '',
//   Runtime: '',
//   Writer: '',
//   imdbRating: '',
//   imdbVotes: '',
// };
