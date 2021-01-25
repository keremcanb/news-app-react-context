import React, { useEffect } from 'react';
import { useArticlesContext } from '../context/actions/articles';
import { useSortContext } from '../context/actions/sort';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { loading, articles, getArticles } = useArticlesContext();
  const { filtered } = useSortContext();

  useEffect(() => {
    getArticles('world');
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
