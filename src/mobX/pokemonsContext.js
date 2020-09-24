import React, { createContext } from "react";

import { useLocalStore } from "mobx-react-lite";
import { getPokemons, getPokemonByUrl } from '../api/api';

export const PokemonsProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    /* observables */
    pokemons: [],
    pokemon: [],
    isLoading: false,
    isLoadingDetails: false,
    error: '',

    /* actions */
    async getPokemons() {
      store.isLoading = true;
      try {
        const pokemonsList = (await getPokemons()).results;

        store.pokemons = pokemonsList.map(pokemon => {
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
      } catch (e) {
        store.setError(e);
      }

      store.isLoading = false;
    },

    // async getPokemonByUrl(url) {
    //   store.isLoading = true;
    //   try {
    //     const { abilities } = await getPokemonByUrl(url);
    //     console.log(abilities)

    //     // store.pokemon = data;
    //   } catch (e) {
    //     store.setError(e);
    //   }

    //   store.isLoading = false;
    // },
    /* computed values i.e. derived state */
  }));

  return (
    <pokemonsContext.Provider value={store}>{children}</pokemonsContext.Provider>
  );
};

export const pokemonsContext = createContext();
