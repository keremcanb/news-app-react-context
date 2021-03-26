import styled from 'styled-components';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { useArticlesContext } from '../context/providers/articles';

const Pagination = () => {
  const { page, pages, loading, paginationHandler } = useArticlesContext();

  return (
    <Wrapper className="section-center">
      <FaArrowCircleLeft aria-label="Previous Page" disabled={loading} onClick={() => paginationHandler('dec')} />
      <p>
        Page {page} of {pages}
      </p>
      <FaArrowCircleRight aria-label="Next Page" disabled={loading} onClick={() => paginationHandler('inc')} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: #09357b;
    font-size: 2rem;
    cursor: pointer;
  }
  svg:disabled {
    cursor: not-allowed;
  }
  p {
    margin: 0 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export default Pagination;
