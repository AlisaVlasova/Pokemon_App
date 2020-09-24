
const API = 'https://pokeapi.co/api/v2/';
const POKEMON_LIST = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = () => (
  fetch(`${API}pokemon/`)
    .then(response => response.json())
);

export const getPokemonByUrl = (url) => (
  fetch(`${url}`)
    .then(response => response.json())
);
