import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { bookmarkItem, unBookmarkItem } from '../store/actions/bookmarks';
import Image from '../img/image.jpg';

const ImageCard = ({
  story,
  story: {
    id,
    webTitle,
    fields: { thumbnail }
  }
}) => {
  const bookmarks = useSelector((state) => state.bookmarks);
  const { bookmarkItems } = bookmarks;
  const dispatch = useDispatch();

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
      {thumbnail ? <img src={thumbnail} alt="thumbnail" /> : <img src={Image} alt="temp" />}
      <div className="card-title">
        <Link to={`/${id}`}>
          <h2>{webTitle}</h2>
        </Link>
        <div className="bookmark">
          {isBookmark(story) ? (
            <i className="fa fa-bookmark" aria-hidden="true" onClick={() => unBookmark(story)} />
          ) : (
            <i className="fa fa-bookmark-o" aria-hidden="true" onClick={() => addBookmark(story)} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 22rem;
  overflow: hidden;
  box-shadow: 5px 5px 5px #aaaaaa;
  .card-title {
    position: absolute;
    height: 9rem;
    width: 100%;
    top: 9.8rem;
    color: white;
    background-color: #0c3371;
    padding: 1rem;
    opacity: 0.9;
    border-bottom: 4px solid #d32f2f;
    a:link,
    a:visited {
      text-decoration: none;
      color: #fff;
      h2 {
        font-size: 1.2rem;
      }
    }
  }
  .bookmark {
      i {
        padding-right: 1rem;
        position: absolute;
        top: 7rem;
        right: 1rem;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
      .button-group {
        button {
          width: 12rem;
          height: 2rem;
        }
      }
    }
  }
`;

export default ImageCard;
