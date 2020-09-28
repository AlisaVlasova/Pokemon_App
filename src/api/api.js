const API = 'https://pokeapi.co/api/v2/';

export const getPokemons = (name = '', limit = 1050, offset = 0) => (
  fetch(`${API}pokemon/${name}?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
);

export const getPokemonBytype = (type = '') => (
  fetch(`${API}type/${type}`)
    .then(response => response.json())
);
