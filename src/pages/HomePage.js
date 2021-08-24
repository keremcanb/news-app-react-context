import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useArticlesContext } from '../context/providers/articles';
import { HomeGrid, ArticleGrid, PageHero, Loader } from '../components';

const HomePage = () => {
  const { filtered, sports, page, sort, loading, fetchArticles, fetchSports } = useArticlesContext();

  useEffect(() => {
    fetchArticles('world', 8, page, sort);
  }, [page, sort]);

  useEffect(() => {
    fetchSports('sport');
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      {filtered && (
        <>
          <Helmet>
            <title>The Peaks</title>
          </Helmet>
          <PageHero title="Top stories" isBookmark isSort />
          <HomeGrid articles={filtered} />
          <PageHero title="Sports" isLink />
          <ArticleGrid articles={sports} />
        </>
      )}
    </>
  );
};

export default HomePage;
