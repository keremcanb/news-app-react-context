import React from 'react';
import { useSelector } from 'react-redux';
import { PageHero, StoryGrid, Loader } from '../components';

const SearchPage = () => {
  const store = useSelector((state) => state.articles);
  const { searchResults, loading } = store;

  return !loading ? (
    <>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" sort />
          <StoryGrid articles={searchResults} />
        </>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>No Results Found</h1>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default SearchPage;
