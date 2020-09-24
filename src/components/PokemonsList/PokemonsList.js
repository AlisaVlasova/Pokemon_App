import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

import './PokemonsList.scss';
import { pokemonsContext } from '../../mobX/pokemonsContext';

import { PokemonCard } from '../PokemonCard';

export const PokemonsList = () => {
  const pokemonsStore = useContext(pokemonsContext);

  useEffect(() => {
    pokemonsStore.getPokemons();
  }, []);

  return useObserver(() => (
    <ul>
      {pokemonsStore.isLoading ? null
        : pokemonsStore.pokemons.map(pokemon => (
          <li key={pokemon.name}>
            <PokemonCard {...pokemon} />
          </li>
        ))}
    </ul>
  ));
};

PokemonsList.propTypes = {

};

PokemonsList.defaultProps = {

};
