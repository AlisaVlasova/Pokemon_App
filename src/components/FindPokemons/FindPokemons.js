import React, { useEffect, useContext } from 'react';
import { useObserver } from 'mobx-react-lite';

import './FindPokemons.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';
import { Details } from '../Details';
import { getColor } from '../../colors';

export const FindPokemons = () => {
  const pokemonsStore = useContext(pokemonsContext);

  useEffect(() => {
    pokemonsStore.getTypes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    pokemonsStore.findPokemon(pokemonsStore.query);
    pokemonsStore.setQuery('');
  };

  const handleChange = (event) => {
    pokemonsStore.cancelError();
    pokemonsStore.setQuery(event.target.value.trim());
    pokemonsStore.filterPokemons(pokemonsStore.query);
  };

  const handleTypeChange = (typeId) => {
    pokemonsStore.setQuery('');
    pokemonsStore.setTypeId(typeId);
    pokemonsStore.filterPokemonsByType(pokemonsStore.typeId);
  };

  return useObserver(() => (
    <div className="finder">
      <form
        className="finder__form"
        onSubmit={handleSubmit}
      >
        <div className="finder__search">
          <input
            className={pokemonsStore.error
              ? 'finder__error-field'
              : 'finder__field'
            }
            type="text"
            value={pokemonsStore.query}
            onChange={handleChange}
            placeholder={pokemonsStore.error
              ? 'No such pokemon'
              : 'Search pokemon'
            }
          />
          <button
            type="submit"
            className="finder__button"
          >
            Search
          </button>
        </div>

        <ul className="finder__types">
          <li>
            <input
              className="finder__toggler toggler"
              type="radio"
              name="type"
              id="0"
              onChange={() => pokemonsStore.getPokemons()}
            />
            <label htmlFor="0" className="finder__type">
              any
            </label>
          </li>
          {pokemonsStore.types.map(type => (
            <li
              key={type.id}
            >
              <input
                className="finder__toggler toggler"
                type="radio"
                name="type"
                id={type.id}
                value={pokemonsStore.typeId}
                onChange={() => handleTypeChange(type.id)}
              />
              <label
                htmlFor={type.id}
                className="finder__type"
                style={{
                  color: getColor(type.name),
                }}
              >
                {type.name}
              </label>
            </li>
          ))}
        </ul>
      </form>
      {pokemonsStore.error ? (
        <p className="finder__error">
          No pokemon with such name
        </p>
      ) : pokemonsStore.pokemon && (
        <Details {...pokemonsStore.pokemon} />
      )}
    </div>
  ));
};
