import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, ArticleGrid, Loader } from '../components';

const SearchPage = ({ keyword }) => {
  const { loading, searchResults, searchArticles } = useArticlesContext();

  useEffect(() => {
    searchArticles(keyword);
  }, [keyword]);

  return !loading ? (
    <>
      {searchResults.length > 0 ? (
        <>
          <PageHero title="Search Results" />
          <ArticleGrid articles={searchResults} />
        </>
      ) : (
        <div className="section section-center text-center">
          <h1>No Results Found</h1>
        </div>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default SearchPage;
