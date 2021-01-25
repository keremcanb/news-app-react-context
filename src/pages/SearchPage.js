import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader } from '../components';

const SearchPage = () => {
  const { loading, searchResults } = useArticlesContext();

  return !loading ? (
    <Wrapper>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" isSort />
          <ArticleGrid articles={searchResults} />
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
