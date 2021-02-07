import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { HomeGrid, ArticleGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { isLoading, articles, articlesMinor, getArticles, getArticlesMinor, page } = useArticlesContext();
  const { filtered } = useUtilsContext();

  useEffect(() => {
    getArticles('world', 8, page);
    getArticlesMinor('sport', 3);
  }, [page]);

  return (
    <>
      {articles && !isLoading ? (
        <>
          <PageHero title="Top stories" isBookmark isSort />
          <HomeGrid articles={filtered} />
          <PageHero title="Sports" isLink />
          <ArticleGrid articles={articlesMinor} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
