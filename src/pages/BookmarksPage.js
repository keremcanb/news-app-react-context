import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarkItems } from '../store/actions/bookmarks';
import { ImageCard, PageHero, StoryGrid, Loader } from '../components';

const BookmarksPage = () => {
  const search = useSelector((state) => state.stories);
  const { loading } = search;
  const bookmarks = useSelector((state) => state.bookmarks);
  const { bookmarkItems } = bookmarks;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

  return !loading ? (
    <>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" sort />
          <StoryGrid stories={bookmarkItems} />
        </>
      ) : (
        <h1 style={{ textAlign: 'center', marginTop: '5rem' }}>No Bookmarks Found</h1>
      )}
    </>
  ) : (
    <Loader />
  );
};

export default BookmarksPage;
