import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { HomeGrid, ArticleGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { filtered, articlesMinor, page, isLoading, fetchArticles, fetchArticlesMinor } = useArticlesContext();

  useEffect(() => {
    fetchArticles('world', 8, page);
    fetchArticlesMinor('sport', 3);
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {filtered && (
        <>
          <PageHero title="Top stories" isBookmark isSort />
          <HomeGrid articles={filtered} />
          <PageHero title="Sports" isLink />
          <ArticleGrid articles={articlesMinor} />
        </>
      )}
    </>
  );
};

export default HomePage;
