import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useArticlesContext } from '../context/providers/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { results, query, page, loading, searchArticles } = useArticlesContext();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchArticles(query, 12, page);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query, page]);

  if (loading) {
    return <Loader />;
  }
  if (results.length < 1) {
    return <Error text="No Results Found" />;
  }
  return (
    <>
      <Helmet>
        <title>Search results</title>
      </Helmet>
      <PageHero title="Search results" isBookmark isSort />
      <Pagination />
      <ArticleGrid articles={results} />
      <Pagination />
    </>
  );
};

export default SearchPage;
