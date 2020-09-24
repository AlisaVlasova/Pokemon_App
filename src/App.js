import React, { useState, useEffect, useContext } from 'react';
import { useObserver } from "mobx-react-lite";

import './App.scss';

import { pokemonsContext, PokemonsProvider } from './mobX/pokemonsContext';
import { PokemonsList } from './components/PokemonsList';
// import { FindPokemons } from './components/FindPokemons';
// import { Pagination } from './components/Pagination';

export const App = () => {


  return (
    <div className="App">
      <PokemonsProvider>
        <PokemonsList />
      </PokemonsProvider>
      {/* <FindPokemons /> */}
      {/* <Pagination /> */}
    </div>
  );
};
