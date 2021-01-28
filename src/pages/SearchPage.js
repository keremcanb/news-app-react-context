import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader, Error } from '../components';

const SearchPage = ({ keyword }) => {
  const { loading, searchResults, searchArticles } = useArticlesContext();

  useEffect(() => {
    searchArticles(keyword);
  }, [keyword]);

  if (loading) {
    return <Loader />;
  }
  if (!searchResults.length > 0) {
    return <Error text="No Results Found" />;
  }
  return (
    <>
      <PageHero title="Search results" isBookmark />
      <ArticleGrid articles={searchResults} />
    </>
  );
};

export default SearchPage;
