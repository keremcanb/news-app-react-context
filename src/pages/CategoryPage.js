/* eslint-disable default-case */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useArticlesContext } from '../context/providers/articles';
import { PageHero, Loader, ArticleGrid, Pagination } from '../components';

const CategoryPage = () => {
  const { filtered, page, loading, fetchArticles } = useArticlesContext();
  const { section } = useParams();

  useEffect(() => {
    switch (section) {
      case 'sport':
        fetchArticles('sport', 12, page);
        break;
      case 'culture':
        fetchArticles('culture', 12, page);
        break;
      case 'lifeandstyle':
        fetchArticles('lifeandstyle', 12, page);
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

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {filtered && (
        <>
          <Helmet>
            <title>{titleHandler()}</title>
          </Helmet>
          <PageHero title={titleHandler()} isBookmark isSort />
          <Pagination />
          <ArticleGrid articles={filtered} />
          <Pagination />
        </>
      )}
    </>
  );
};

export default CategoryPage;
