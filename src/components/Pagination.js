import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/providers/articles';

const Pagination = () => {
  const { page, pages, loading, paginationHandler } = useArticlesContext();

  return (
    <Wrapper className="section-center">
      <button aria-label="Previous Page" disabled={loading} onClick={() => paginationHandler('dec')} type="button">
        Prev
      </button>
      <p>
        Page {page} of {pages}
      </p>
      <button aria-label="Next Page" disabled={loading} onClick={() => paginationHandler('inc')} type="button">
        Next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  button {
    margin: 1rem;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    font-weight: bold;
    border-color: transparent;
    background: #09357b;
    border-radius: 0.25rem;
    color: #fff;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;

export default Pagination;
