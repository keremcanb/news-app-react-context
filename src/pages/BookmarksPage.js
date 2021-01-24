import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarkItems } from '../store/actions/bookmarks';
import { PageHero, ArticleGrid, Loader } from '../components';

const BookmarksPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.bookmarks);
  const { bookmarkItems, loading } = store;

  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

  return !loading ? (
    <Wrapper>
      {bookmarkItems.length > 0 ? (
        <>
          <PageHero title="All Bookmarks" sort />
          <ArticleGrid articles={bookmarkItems} />
        </>
      ) : (
        <div className="error">
          <h1>No Bookmarks Found</h1>
        </div>
      )}
    </Wrapper>
  ) : (
    <Loader />
  );
};

const Wrapper = styled.div`
  .error {
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export default BookmarksPage;
