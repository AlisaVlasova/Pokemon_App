import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import './PokemonCard.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';

export const PokemonCard = ({
  sprite,
  name,
  id,
  types,
}) => {

  return useObserver(() => (
    <div className="card">
      <div className="card__image-container">
        <figure className="card__image">
          <img
            src={sprite}
            alt="Pokemon"
          />
        </figure>
      </div>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
      </div>
    </div>
  ));
};

PokemonCard.propTypes = {

};
