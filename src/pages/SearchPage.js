import React from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader, Error, Pagination } from '../components';

const SearchPage = () => {
  const { loading, searchResults } = useArticlesContext();
  console.log(searchResults);

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
    </>
  );
};

export default SearchPage;
