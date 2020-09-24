import React from 'react';

import './Pagination.scss';

export const Pagination = () => {

  const totalPages = Math.ceil(searchResults / 10);

  const handlePage = (pageNum) => {
    dispatch(actions.selectPage(pageNum));
  };

  return !searchResults || (
    <div className="pagination">
      <button
        className="button is-light"
        type="button"
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
      >
        {`<`}
      </button>
      <span>
        {` ${page} / ${totalPages} `}
      </span>
      <button
        className="button is-light"
        type="button"
        onClick={() => handlePage(page + 1)}
        disabled={page === totalPages || searchResults < 10}
      >
        {`>`}
      </button>
    </div>
  );
};
