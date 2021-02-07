/* eslint-disable default-case */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticlesContext } from '../context/actions/articles';
import { useUtilsContext } from '../context/actions/utils';
import { PageHero, Loader, ArticleGrid, Pagination } from '../components';

const CategoryPage = () => {
  const { page, articles, isLoading, getArticles } = useArticlesContext();
  const { filtered } = useUtilsContext();
  const { section } = useParams();

  useEffect(() => {
    switch (section) {
      case 'sport':
        getArticles('sport', 6, page);
        break;
      case 'culture':
        getArticles('culture', 6, page);
        break;
      case 'lifeandstyle':
        getArticles('lifeandstyle', 6, page);
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
      {articles && !isLoading ? (
        <>
          <PageHero title={titleHandler()} isBookmark isSort />
          <Pagination />
          <ArticleGrid articles={filtered} />
          <Pagination />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default CategoryPage;
