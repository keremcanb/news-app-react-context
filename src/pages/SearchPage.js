import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { isLoading, searchResults, query, page, searchArticles } = useArticlesContext();

  useEffect(() => {
    searchArticles(query, page);
  }, [query, page]);

  if (isLoading) {
    return <Loader />;
  }
  if (searchResults.length < 1) {
    return <Error text="No Results Found" />;
  }
  return (
    <>
      <PageHero title="Search results" isBookmark />
      <Pagination />
      <ArticleGrid articles={searchResults} />
      <Pagination />
    </>
  );
};

export default SearchPage;
