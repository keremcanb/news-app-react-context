import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';

const Pagination = () => {
  const { isLoading, page, pages, paginationHandler } = useArticlesContext();

  return (
    <Wrapper className="section-center">
      <button disabled={isLoading} onClick={() => paginationHandler('dec')} type="submit">
        Prev
      </button>
      <p>
        Page {page} of {pages}
      </p>
      <button disabled={isLoading} onClick={() => paginationHandler('inc')} type="submit">
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
