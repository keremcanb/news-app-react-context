import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { bookmarkItem, unBookmarkItem } from '../store/actions/bookmarks';
import placeholder from '../assets/placeholder.png';

const ArticleCard = ({
  article,
  article: {
    id,
    webTitle,
    fields: { thumbnail }
  }
}) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  const { bookmarkItems } = bookmarks;

  const isBookmark = (item) => {
    if (bookmarkItems !== null) {
      return bookmarkItems.findIndex((bookmark) => bookmark.webTitle === item.webTitle) > -1;
    }
  };

  const addBookmark = (item) => {
    dispatch(bookmarkItem(item));
  };

  const unBookmark = (item) => {
    dispatch(unBookmarkItem(item));
  };

  return (
    <Wrapper>
      <article>
        {thumbnail ? <img src={thumbnail} alt="thumbnail" /> : <img src={placeholder} alt="temp" />}
        <div className="card-heading">
          <Link to={`/article/${id}`}>
            <h2>{webTitle}</h2>
          </Link>

          <div className="card-icon">
            {isBookmark(article) ? (
              <FaBookmark onClick={() => unBookmark(article)} />
            ) : (
              <FaRegBookmark onClick={() => addBookmark(article)} />
            )}
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 5px #aaaaaa;
  margin-bottom: 2rem;
  width: 20rem;
  height: 22rem;
  img {
    height: 22rem;
  }
  .card-heading {
    height: 8.7rem;
    padding: 0.5rem 1rem 0 1rem;
    position: absolute;
    top: 13.4rem;
    color: white;
    background-color: #0c3371;
    opacity: 0.9;
    border-bottom: 4px solid #d32f2f;
    a:link,
    a:visited {
      text-decoration: none;
      color: #fff;
    }
  }
  .card-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  svg {
    margin-right: 0.5rem;
    position: absolute;
    top: 6.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 385px;
    height: 385px;
    img {
      width: 385px;
      height: 385px;
    }
    .card-heading {
      height: 145px;
      top: 15rem;
    }
  }
  @media (min-width: 992px) {
  }
`;

export default ArticleCard;
