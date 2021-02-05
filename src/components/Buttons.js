import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';

const Buttons = () => {
  const { loading, page, pages, handlePage } = useArticlesContext();

  return (
    <Wrapper>
      <button disabled={loading} onClick={() => handlePage('dec')} type="submit">
        prev
      </button>
      <p>
        {page} of {pages}
      </p>
      <button disabled={loading} onClick={() => handlePage('inc')} type="submit">
        next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
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

export default Buttons;
