/* eslint-disable default-case */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { PageHero, Loader, ArticleGrid, Buttons } from '../components';

const CategoryPage = () => {
  const { page, articles, loading, getArticles } = useArticlesContext();
  const { filtered } = useUtilsContext();
  const { section } = useParams();

  useEffect(() => {
    switch (section) {
      case 'sport':
        getArticles('sport', page);
        break;
      case 'culture':
        getArticles('culture', page);
        break;
      case 'lifeandstyle':
        getArticles('lifeandstyle', page);
    }
  }, [section, page]);

  const titleHandler = () => {
    switch (section) {
      case 'sport':
        return 'Sports';
      case 'culture':
        return 'Culture';
      case 'lifeandstyle':
        return 'Lifestyle';
    }
  };

  return (
    <>
      {articles && !loading ? (
        <>
          <PageHero title={titleHandler()} isSort />
          <Buttons />
          <ArticleGrid articles={filtered} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
