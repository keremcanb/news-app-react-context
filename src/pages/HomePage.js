import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { loading, articles, getArticles } = useArticlesContext();

  useEffect(() => {
    getArticles('world');
  }, []);

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title="Top stories" articles={articles} isSort isBookmark />
          <HomeGrid articles={articles} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
