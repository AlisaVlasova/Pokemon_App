import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

import './FindPokemons.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';
import { Details } from '../Details';

export const FindPokemons = () => {
  const pokemonsStore = useContext(pokemonsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    pokemonsStore.findPokemon(pokemonsStore.query);
  };

  return useObserver(() => (
    <div className="pokemons__finder finder">
      <form
        className="finder__form"
        onSubmit={handleSubmit}
      >
        <input
          className="finder__field"
          type="text"
          value={pokemonsStore.query}
          onChange={event => pokemonsStore.setQuery(event.target.value)}
          placeholder="Enter pokemon's name"
        />
      </form>
      {pokemonsStore.pokemon && (
        <Details {...pokemonsStore.pokemon} />
      )}
    </div>
  ));
};

FindPokemons.propTypes = {

};
