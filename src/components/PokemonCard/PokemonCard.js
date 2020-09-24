import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import './PokemonCard.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';

export const PokemonCard = ({ name, id, sprite }) => {

  return useObserver(() => (
    <div className="card">
      <div className="card__image">
        <figure className="image">
          <img
            src={sprite}
            alt="Pokemon"
          />
        </figure>
      </div>
      <div className="card__content">
        <div className="media">
          <div className="media-content">
            <p className="title">{name}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

PokemonCard.propTypes = {

};
