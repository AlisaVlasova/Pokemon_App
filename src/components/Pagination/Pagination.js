import React, { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';

import './Pagination.scss';

import { pokemonsContext } from '../../mobX/pokemonsContext';

export const Pagination = () => {
  const pokemonsStore = useContext(pokemonsContext);
  const totalPages = Math.ceil(pokemonsStore.pokemons.length / pokemonsStore.pageSize);

  const handlePage = (offset, limit, page) => {
    pokemonsStore.setPagination(offset, limit, page);
  };

  return (
    <div className="pagination">
      <div className="pagination__buttons-container">
        <button
          className="pagination__button"
          type="button"
          disabled={pokemonsStore.currentPage === 1}
          onClick={() => {
            handlePage(
              (pokemonsStore.offset - pokemonsStore.pageSize),
              (pokemonsStore.limit - pokemonsStore.pageSize),
              (pokemonsStore.currentPage - 1),
            );
          }}
        >
          {`<`}
        </button>
        <p className="pagination__title">
          {`${pokemonsStore.currentPage} / ${totalPages}`}
        </p>
        <button
          className="pagination__button"
          type="button"
          disabled={pokemonsStore.currentPage === totalPages
            || pokemonsStore.pokemons.length <= pokemonsStore.pageSize}
          onClick={() => {
            handlePage(
              (pokemonsStore.offset + pokemonsStore.pageSize),
              (pokemonsStore.limit + pokemonsStore.pageSize),
              (pokemonsStore.currentPage + 1),
            );
          }}
        >
          {`>`}
        </button>
      </div>
      <div className="pagination__page-select-container">
        <p className="pagination__title">
          Page size:
        </p>
        <select
          className="pagination__page-select"
          onChange={event => pokemonsStore.setPageSize(event.target.value)}
        >
          <option
            className="pagination__page-size"
            value={10}
          >
            10
          </option>
          <option
            className="pagination__page-size"
            value={20}
          >
            20
          </option>
          <option
            className="pagination__page-size"
            value={50}
          >
            50
          </option>
        </select>
      </div>
    </div>
  );
};
