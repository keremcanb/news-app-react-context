import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/providers/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { results, query, page, loading, searchArticles } = useArticlesContext();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchArticles(query, 6, page);
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [query, page]);

  if (loading) {
    return <Loader />;
  }
  if (results.length < 1) {
    return <Error text="No Results Found" />;
  }
  return (
    <>
      <PageHero title="Search results" isBookmark isSort />
      <Pagination />
      <ArticleGrid articles={results} />
      <Pagination />
    </>
  );
};

export default SearchPage;
