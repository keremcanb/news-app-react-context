import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useArticlesContext } from '../context/providers/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { results, query, page, sort, loading, searchArticles } = useArticlesContext();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchArticles(query, 12, page, sort);
    }, 1000);
    return () => clearTimeout(delayDebounce);
  }, [query, page, sort]);

  if (loading) {
    return <Loader />;
  }
  if (results.length < 1) {
    return <Error text='No Results Found' />;
  }
  return (
    <>
      <Helmet>
        <title>Search results</title>
      </Helmet>
      <PageHero title='Search results' isBookmark isSort />
      <Pagination />
      <ArticleGrid articles={results} />
      <Pagination />
    </>
  );
};

export default SearchPage;
