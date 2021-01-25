import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';
import { useSortContext } from '../context/actions/sort';
import { PageHero, ArticleGrid, Loader } from '../components';

const SearchPage = () => {
  const { loading, searchResults } = useArticlesContext();
  const { filtered } = useSortContext();

  return !loading ? (
    <Wrapper>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" isSort />
          <ArticleGrid articles={filtered} />
        </>
      ) : (
        <div className="error">
          <h1>No Results Found</h1>
        </div>
      )}
    </Wrapper>
  ) : (
    <Loader />
  );
};

const Wrapper = styled.div`
  .error {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default SearchPage;
