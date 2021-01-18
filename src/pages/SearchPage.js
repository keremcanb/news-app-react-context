import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getBookmarkItems } from '../store/actions/bookmarks';
import { ImageCard, PageHero, StoryGrid, Loader } from '../components';

const SearchPage = () => {
  const search = useSelector((state) => state.stories);
  const { searchResults, loading } = search;

  return !loading ? (
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
  ) : (
    <Loader />
  );
};

export default SearchPage;
