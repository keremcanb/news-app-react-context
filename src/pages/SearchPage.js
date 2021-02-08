import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/providers/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { searchResults, query, page, loading, searchArticles } = useArticlesContext();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchArticles(query, 6, page);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query, page]);

  if (loading) {
    return <Loader />;
  }
  if (searchResults.length < 1) {
    return <Error text="No Results Found" />;
  }
  return (
    <>
      <PageHero title="Search results" isBookmark isSort />
      <Pagination />
      <ArticleGrid articles={searchResults} />
      <Pagination />
    </>
  );
};

export default SearchPage;
