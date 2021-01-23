import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../store/actions/articles';
import { HomeGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.articles);
  const { articles, loading } = store;

  useEffect(() => {
    dispatch(getArticles('world'));
  }, [dispatch]);

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title="Top stories" articles={articles} sort bookmark />
          <HomeGrid articles={articles} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomePage;
