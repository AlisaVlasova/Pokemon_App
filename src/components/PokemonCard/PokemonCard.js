import React from 'react';
import { useObserver } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import './PokemonCard.scss';

export const PokemonCard = ({
  sprite,
  name,
}) => (
  useObserver(() => (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src={sprite}
          alt="Pokemon"
        />
      </div>
      <h2 className="card__title">
        {name}
      </h2>
    </div>
  ))
);

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
