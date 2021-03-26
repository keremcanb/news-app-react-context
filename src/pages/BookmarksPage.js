import { Helmet } from 'react-helmet';
import { useBookmarksContext } from '../context/providers/bookmarks';
import { PageHero, ArticleGrid, Error } from '../components';

const BookmarksPage = () => {
  const { bookmarkItems } = useBookmarksContext();

  if (bookmarkItems.length < 1) {
    return <Error text="No Bookmarks Found" />;
  }
  return (
    <>
      <Helmet>
        <title>Bookmarks</title>
      </Helmet>
      <PageHero title="All Bookmarks" />
      <ArticleGrid articles={bookmarkItems} />
    </>
  );
};

export default BookmarksPage;
