import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader, Error } from '../components';

const SearchPage = ({ keyword }) => {
  const { loading, searchResults, searchArticles } = useArticlesContext();

  useEffect(() => {
    searchArticles(keyword);
  }, [keyword]);

  return !loading ? (
    <>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search results" isBookmark />
          <ArticleGrid articles={searchResults} />
        </>
      ) : (
        <Error text="No Results Found" />
      )}
    </>
  ) : (
    <Loader />
  );
};

export default SearchPage;
