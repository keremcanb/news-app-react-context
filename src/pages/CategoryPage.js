import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { PageHero, Loader, ArticleGrid } from '../components';

const CategoryPage = () => {
  const { articles, loading, getArticles } = useArticlesContext();
  const { filtered } = useUtilsContext();
  const { id } = useParams();

  useEffect(() => {
    if (id === 'sport') {
      getArticles('sport', '12');
    }
    if (id === 'culture') {
      getArticles('culture', '12');
    }
    if (id === 'lifeandstyle') {
      getArticles('lifeandstyle', '12');
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
          <PageHero title={titleHandler()} isSort />
          <ArticleGrid articles={filtered} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
