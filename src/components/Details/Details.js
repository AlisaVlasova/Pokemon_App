import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

import './Details.scss';
import { pokemonsContext } from '../../mobX/pokemonsContext';
import { getColor } from '../../colors';

export const Details = (
  {
    sprite,
    name,
    id,
    baseExperience,
    types,
    weight,
    height,
    stats,
  },
) => {
  const pokemonsStore = useContext(pokemonsContext);

  return useObserver(() => {
    return pokemonsStore.isLoadingDetails
      ? (
        <p className="loader">
          Loading...
        </p>
      ) : !name || (
        <div className="details">
          <input
            type="checkbox"
            className="toggler"
            id="closer"
            onChange={() => pokemonsStore.clearPokemon()}
          />
          <label
            className="details__closer-label"
            htmlFor="closer"
          >
            Hide
          </label>
          <div className="details__content">
            <img
              className="details__image"
              src={sprite}
              alt="Pokemon"
            />
            <div className="details__main">
              <p className="details__title">
                {name}
              </p>
              <ul className="details__types-list">
                {types.map(type => (
                  <li
                    key={type}
                    className="details__type"
                    style={{
                      color: getColor(type),
                    }}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__description">
            <p className="details__base-info">
              <span className="highlited">
                Height:
              </span>
              {` ${height}`}
            </p>
            <p className="details__base-info">
              <span className="highlited">
                Weight:
              </span>
              {` ${weight}`}
            </p>
            <p className="details__base-info">
              <span className="highlited">
                Base Experience:
              </span>
              {` ${baseExperience}`}
            </p>
            <table className="details__stats-table">
              <thead>
                <tr className="details__stats-head">
                  <th className="details__stats-header">
                    stat
                  </th>
                  <th className="details__stats-header">
                    base
                  </th>
                  <th className="details__stats-header">
                    effort
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.map(stat => (
                  <tr key={stat.stat} className="details__stats">
                    <td className="details__stat-name">
                      {stat.stat}
                    </td>
                    <td className="details__stat">
                      {stat.base_stat}
                    </td>
                    <td className="details__stat">
                      {stat.effort}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
  });
};

Details.propTypes = {
  pokemon: PropTypes.shape({
    sprite: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    baseExperience: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.object).isRequired,
    weight: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
