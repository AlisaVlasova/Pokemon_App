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

  const handleClick = (name) => {
    pokemonsStore.findPokemon(name);
  };

  return useObserver(() => (
    <ul className="pokemons-list">
      {pokemonsStore.isLoading ? null
        : pokemonsStore.pokemons.map(pokemon => (
          <div
            role="presentation"
            onClick={() => handleClick(pokemon.name)}
          >
            <li className="pokemons-list__item" key={pokemon.name}>
              <PokemonCard {...pokemon} />
            </li>
          </div>
          
        ))}
    </ul>
  ));
};

PokemonsList.propTypes = {

};

PokemonsList.defaultProps = {

};
