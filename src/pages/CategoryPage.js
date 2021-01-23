import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../store/actions/articles';
import { PageHero, Loader, ArticleGrid } from '../components';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.articles);
  const { articles, loading } = store;
  const { id } = useParams();

  useEffect(() => {
    if (id === 'sport') {
      dispatch(getArticles('sport'));
    }
    if (id === 'culture') {
      dispatch(getArticles('culture'));
    }
    if (id === 'lifeandstyle') {
      dispatch(getArticles('lifeandstyle'));
    }
  }, [dispatch, id]);

  const titleHandler = () => {
    if (id === 'sport') {
      return 'Sports';
    }
    if (id === 'culture') {
      return 'Culture';
    }
    if (id === 'lifeandstyle') {
      return 'Lifestyle';
    }
  };

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title={titleHandler()} sort />
          <ArticleGrid articles={articles} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
