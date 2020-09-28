export const getColor = (type) => {
  const color = {
    normal: '#A8A878',
    poison: '#A040A0',
    fire: '#9C531F',
    water: '#6890F0',
    electric: '#F8D030',
    fighting: '#C03028',
    ground: '#927D44',
    psychic: '#F85888',
    dark: '#705848',
    rock: '#B8A038',
    steel: '#B8B8D0',
    grass: '#78C850',
    ice: '#98D8D8',
    flying: '#A890F0',
    bug: '#A8B820',
    ghost: '#705898',
    dragon: '#7038F8',
    fairy: '#EE99AC',
  };

  return color[type] || '#000000';
};
