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
      {thumbnail ? <img src={thumbnail} alt="thumbnail" /> : <img src={placeholder} alt="temp" />}
      <div className="card">
        <Link to={`/article/${id}`}>
          <h2>{webTitle}</h2>
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
  /* width: 20rem;
  height: 22rem;
  img {
    height: 22rem;
  } */
  .card {
    height: 8.7rem;
    padding: 0.5rem 1rem 0 1rem;
    position: absolute;
    top: 13.4rem;
    color: white;
    background-color: #0c3371;
    opacity: 0.9;
    /* border-bottom: 4px solid #d32f2f; */
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
    top: 6.5rem;
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
    &:first-child {
      grid-column: 1 / 7;
      grid-row-end: span 2;
      width: 35rem;
      height: 30rem;
      img {
        width: 100%;
        height: 100%;
      }
      .card {
        top: 22rem;
      }
    }
    &:nth-child(-n + 5):not(:first-child) {
      grid-column-end: span 3;
      width: 17rem;
      height: 20rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &:nth-child(1) {
      border-bottom: 3px solid #388e3c;
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
    h1 {
      font-size: 5rem;
    }
  }
`;

export default ImageCard;
