import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../context/actions/articles';
import { PageHero, Loader, ArticleGrid } from '../components';

const CategoryPage = () => {
  const { articles, loading, getArticles } = useArticlesContext();
  const { id } = useParams();

  useEffect(() => {
    if (id === 'sport') {
      getArticles('sport');
    }
    if (id === 'culture') {
      getArticles('culture');
    }
    if (id === 'lifeandstyle') {
      getArticles('lifeandstyle');
    }
  }, [id]);

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
          <PageHero title={titleHandler()} sorting />
          <ArticleGrid articles={articles} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
