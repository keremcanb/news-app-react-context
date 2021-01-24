import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PageHero, ArticleGrid, Loader } from '../components';

const SearchPage = () => {
  const store = useSelector((state) => state.articles);
  const { searchResults, loading } = store;

  return !loading ? (
    <Wrapper>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" sort />
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
