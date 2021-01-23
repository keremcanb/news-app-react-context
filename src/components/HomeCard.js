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
    fields: { thumbnail, trailText }
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
      {thumbnail ? <img src={thumbnail} alt="thumbnail" /> : <img src={placeholder} alt="temp" />}
      <div className="card-heading">
        <Link to={`/article/${id}`}>
          <h2>{webTitle}</h2>
          <h3>{trailText}</h3>
        </Link>

        <div className="card-icon">
          {isBookmark(article) ? (
            <FaBookmark onClick={() => unBookmark(article)} />
          ) : (
            <FaRegBookmark onClick={() => addBookmark(article)} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
    bottom: 0.6rem;
    right: 0.1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    h3 {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-column-end: span 4;
    img {
      width: 100%;
      height: 100%;
    }
    h1 {
      font-size: 5rem;
    }
    h3 {
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      margin-top: 0.2rem;
      font-size: 0.9rem;
    }
    &:first-child {
      grid-column: 1 / 7;
      grid-row-end: span 2;
      width: 570px;
      height: 462px;
      border-bottom: 3px solid #388e3c;
      .card-heading {
        top: 19.5rem;
        height: 150px;
      }
    }
    &:nth-child(-n + 5):not(:first-child) {
      grid-column-end: span 3;
      h3 {
        display: none;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      width: 270px;
      height: 270px;
      .card-heading {
        top: 10.5rem;
        height: 115px;
      }
    }
    &:nth-child(4),
    &:nth-child(5) {
      width: 270px;
      height: 150px;
      img {
        display: none;
      }
      .card-heading {
        top: 0;
        height: 150px;
      }
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      width: 370px;
      height: 370px;
      .card-heading {
        top: 15rem;
        height: 145px;
      }
    }
    &:nth-child(2) {
      border-bottom: 3px solid #f50057;
    }
    &:nth-child(3) {
      border-bottom: 3px solid #ffca28;
    }
    &:nth-child(4) {
      border-bottom: 3px solid #2196f3;
    }
    &:nth-child(5) {
      border-bottom: 3px solid #388e3c;
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      border-bottom: 3px solid #f50057;
    }
    &:nth-child(9) {
      display: none;
    }
  }
`;

export default ArticleCard;
