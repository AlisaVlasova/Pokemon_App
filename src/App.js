import React from 'react';
import { useObserver } from 'mobx-react-lite';

import './App.scss';

import { PokemonsProvider } from './mobX/pokemonsContext';
import { PokemonsList } from './components/PokemonsList';
import { FindPokemons } from './components/FindPokemons';

export const App = () => (
  useObserver(() => (
    <div className="pokemons">
      <PokemonsProvider>
        <FindPokemons />
        <PokemonsList />
      </PokemonsProvider>
    </div>
  ))
);
