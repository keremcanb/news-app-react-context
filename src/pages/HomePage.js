import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { HomeGrid, ArticleGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { loading, articles, articlesSports, getArticles, getArticlesSports } = useArticlesContext();
  const { filtered } = useUtilsContext();

  useEffect(() => {
    getArticles('world', '8');
    getArticlesSports();
  }, []);

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title="Top stories" isSort isBookmark />
          <HomeGrid articles={filtered} />
          <PageHero title="Sports" isLink />
          <ArticleGrid articles={articlesSports} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
