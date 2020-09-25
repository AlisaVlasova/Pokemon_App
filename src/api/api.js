const API = 'https://pokeapi.co/api/v2/';
const POKEMON_LIST = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemons = (name = '', limit, offset) => (
  fetch(`${API}pokemon/${name}?limit=${limit}&offset=${offset}"`)
    .then(response => response.json())
);

export const getPokemonById = (url) => (
  fetch(`${url}`)
    .then(response => response.json())
);
