import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { loading, searchResults, query, page, searchArticles } = useArticlesContext();

  useEffect(() => {
    searchArticles(query, page);
  }, [query, page]);

  if (loading) {
    return <Loader />;
  }
  if (searchResults.length < 0) {
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
