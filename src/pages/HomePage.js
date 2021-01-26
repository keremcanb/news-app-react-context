import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { loading, articles, getArticles } = useArticlesContext();
  const { filtered } = useUtilsContext();

  useEffect(() => {
    getArticles('world', '8');
  }, []);

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title="Top stories" isSort isBookmark />
          <HomeGrid articles={filtered} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
