import React, { createContext } from "react";

import { useLocalStore } from "mobx-react-lite";
import { getPokemons, getPokemonByUrl } from '../api/api';

export const PokemonsProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    /* observables */
    pokemons: [],
    pokemon: {},
    isLoading: false,
    isLoadingDetails: false,
    error: '',
    query: '',
    types: 'any',

    /* actions */

    async getPokemons() {
      store.isLoading = true;
      try {
        const pokemonsList = (await getPokemons()).results;

        store.pokemons = pokemonsList.map((pokemon) => {
          const id = pokemon.url.match(/pokemon\/(\d+)\//)[1];
          const { name } = pokemon;
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          console.log(store.pokemons)

          return {
            ...pokemon,
            name,
            id,
            sprite,
          };
        });
      } catch (e) {
        // store.setError(e);
      }

      store.isLoading = false;
    },

    async findPokemon(query) {
      const {
        abilities,
        sprites,
        forms,
        species,
        name,
        id,
        base_experience,
        types,
        weight,
        height,
        stats,
        moves,
        location_area_encounters,
        game_indices,
      } = await getPokemons(query);
      const abilitiesNames = abilities.map(ab => ab.ability.name);
      const typesNames = types.map(t => t.type.name);
      const movesNames = moves.map(m => m.move.name);
      const gameIndices = game_indices.map(g => ({
        gameIndex: g.game_index,
        version: g.version.name,
      }));
      const statsList = stats.map(s => ({
        stat: s.stat.name,
        base_stat: s.base_stat,
        effort: s.effort,
      }));
      console.log(await getPokemons(query));
      console.log(base_experience);
      store.pokemon = {
        ...store.pokemon,
        abilities: abilitiesNames,
        sprite: sprites.front_default,
        name,
        id,
        baseExperience: base_experience,
        types: typesNames,
        weight,
        height,
        stats: statsList,
        moves: movesNames,
        location: location_area_encounters,
        gameIndices: game_indices,
      };
      console.log(store.pokemon.abilities)
    },

    setQuery(input) {
      store.query = input;
    },
  }));

  return (
    <pokemonsContext.Provider value={store}>{children}</pokemonsContext.Provider>
  );
};

export const pokemonsContext = createContext();
