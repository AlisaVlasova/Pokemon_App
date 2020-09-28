import React, { useContext, useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';

import './PokemonsList.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';
import { PokemonCard } from '../PokemonCard';
import { Pagination } from '../Pagination';

export const PokemonsList = () => {
  const pokemonsStore = useContext(pokemonsContext);

  useEffect(() => {
    pokemonsStore.getPokemons();
  }, []);

  const handleClick = (name) => {
    pokemonsStore.findPokemon(name);
  };

  return useObserver(() => (
    <div className="pokemons-container">
      <ul className="pokemons-list">
        {pokemonsStore.isLoading
          ? (
            <p className="list-loader">
              Loading...
            </p>
          ) : pokemonsStore.clonedPokemons
            .slice(pokemonsStore.offset, pokemonsStore.limit)
            .map(pokemon => (
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
      <Pagination />
    </div>
  ));
};
