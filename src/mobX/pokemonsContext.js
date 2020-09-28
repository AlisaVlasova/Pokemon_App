import React, { createContext } from 'react';

import { useLocalStore } from 'mobx-react-lite';
import { getPokemons, getPokemonBytype } from '../api/api';

export const PokemonsProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    pokemons: [],
    clonedPokemons: [],
    pokemon: {},
    isLoading: false,
    isLoadingDetails: false,
    error: false,
    query: '',
    types: [],
    typeId: 0,
    offset: 0,
    limit: 10,
    pageSize: 10,
    currentPage: 1,

    setPagination(offset, limit, page) {
      store.offset = offset;
      store.limit = limit;
      store.currentPage = page;
    },

    setPageSize(num) {
      store.pageSize = num;
      store.limit = num;
      store.offset = 0;
      store.currentPage = 1;
    },

    async getPokemons() {
      store.isLoading = true;
      try {
        const pokemonsList = (await getPokemons()).results;

        store.pokemons = pokemonsList.map((pokemon) => {
          const id = pokemon.url.match(/pokemon\/(\d+)\//)[1];
          const { name } = pokemon;
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return {
            ...pokemon,
            name,
            id,
            sprite,
          };
        });

        store.clonedPokemons = [...store.pokemons];
      } catch {
        store.error = true;
        store.error = false;
      }

      store.isLoading = false;
    },

    // given api doesn't support the search param.
    // That's why I have to save all the list to the store and search here.

    filterPokemons(query) {
      if (!store.pokemons.some(pokemon => pokemon.name.includes(query))) {
        store.error = true;
      }

      const filteredPokemonsList = store.pokemons
        .filter(pokemon => pokemon.name.includes(query));

      store.clonedPokemons = filteredPokemonsList;
    },

    async getTypes() {
      const typesList = (await getPokemonBytype()).results;

      store.types = typesList.slice(0, -2).map((type) => {
        const { name } = type;
        const id = type.url.match(/type\/(\d+)\//)[1];

        return {
          name,
          id,
        };
      });
    },

    async filterPokemonsByType(type) {
      const pokemonsByType = (await getPokemonBytype(type)).pokemon;

      store.pokemons = pokemonsByType.map((pokemon) => {
        const id = pokemon.pokemon.url.match(/pokemon\/(\d+)\//)[1];
        const { name } = pokemon.pokemon;
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return {
          ...pokemon,
          name,
          id,
          sprite,
        };
      });
      store.clonedPokemons = [...store.pokemons];
    },

    async findPokemon(query) {
      store.isLoadingDetails = true;
      try {
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
          gameIndices,
        };
      } catch {
        store.error = true;
      }

      store.isLoadingDetails = false;
    },

    clearPokemon() {
      store.pokemon = {};
    },

    setQuery(input) {
      store.query = input;
    },

    setTypeId(input) {
      store.typeId = input;
    },

    cancelError() {
      store.error = false;
    },

  }));

  return (
    <pokemonsContext.Provider
      value={store}
    >
      {children}
    </pokemonsContext.Provider>
  );
};

export const pokemonsContext = createContext();
