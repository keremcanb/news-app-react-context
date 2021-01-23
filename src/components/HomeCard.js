import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { bookmarkItem, unBookmarkItem } from '../store/actions/bookmarks';
import placeholder from '../assets/placeholder.png';

const ImageCard = ({
  story,
  story: {
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
      <div className="card">
        <Link to={`/article/${id}`}>
          <h2>{webTitle}</h2>
          <h3>{trailText}</h3>
        </Link>

        <div className="card-footer">
          {isBookmark(story) ? (
            <FaBookmark onClick={() => unBookmark(story)} />
          ) : (
            <FaRegBookmark onClick={() => addBookmark(story)} />
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
  .card {
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
  .card-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  svg {
    margin-right: 0.5rem;
    position: absolute;
    bottom: 1rem;
    right: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 22rem;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-column-end: span 4;
    padding: 0;
    img {
      width: 100%;
      height: 100%;
    }
    &:first-child {
      grid-column: 1 / 7;
      grid-row-end: span 2;
      width: 595px;
      height: 465px;
      border-bottom: 3px solid #388e3c;
      .card {
        top: 20rem;
        height: 150px;
      }
      h3 {
        font-family: 'Open Sans', sans-serif;
        font-weight: normal;
        margin-top: 0.5rem;
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
      width: 280px;
      height: 280px;
      .card {
        top: 10.5rem;
        height: 115px;
      }
    }
    &:nth-child(4),
    &:nth-child(5) {
      width: 280px;
      height: 150px;
      img {
        display: none;
      }
      .card {
        top: 0;
        height: 150px;
      }
    }
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(8) {
      width: 385px;
      height: 385px;
      .card {
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
    h1 {
      font-size: 5rem;
    }
  }
`;

export default ImageCard;
