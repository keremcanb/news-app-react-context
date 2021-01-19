import React from 'react';
import { useSelector } from 'react-redux';
import { PageHero, StoryGrid } from '../components';

const SearchPage = () => {
  const store = useSelector((state) => state.stories);
  const { searchResults } = store;

  return (
    <>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" sort />
          <StoryGrid stories={searchResults} />
        </>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>No Results Found</h1>
      )}
    </>
  );
};

export default SearchPage;
