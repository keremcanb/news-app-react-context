/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import { useArticlesContext } from '../context/actions/articles';
import { Loader } from '../components';
import { useBookmarksContext } from '../context/actions/bookmarks';

const ArticlePage = () => {
  const { bookmarkItems, bookmarkItem, unBookmarkItem } = useBookmarksContext();
  const { loading, article, getArticle } = useArticlesContext();
  const { webTitle, webPublicationDate, fields } = article;
  const { section, year, month, day, id } = useParams();
  const selectedArticle = `${section}/${year}/${month}/${day}/${id}`;

  useEffect(() => {
    getArticle(selectedArticle);
  }, []);

  const isBookmark = (item) => {
    if (bookmarkItems !== null) {
      return bookmarkItems.findIndex((bookmark) => bookmark.webTitle === item.webTitle) > -1;
    }
  };

  return (
    <>
      {!loading ? (
        <Wrapper>
          <div className="article-hero">
            <div className="hero-left">
              <div>
                {isBookmark(article) ? (
                  <button onClick={() => unBookmarkItem(article)}>
                    <i className="fa fa-bookmark" aria-hidden="true" />
                    Remove Bookmark
                  </button>
                ) : (
                  <button onClick={() => bookmarkItem(article)}>
                    <i className="fa fa-bookmark-o" aria-hidden="true" />
                    Add Bookmark
                  </button>
                )}
              </div>
              <Moment format="Do MMMM YYYY, h:mm:ss a">{webPublicationDate}</Moment>
              <h1>{webTitle}</h1>
              {fields && <div dangerouslySetInnerHTML={{ __html: fields.standfirst }} />}
            </div>
            <div className="hero-right" />
          </div>
          <hr />
          <article className="article-body">
            {fields && <p>{fields.bodyText}</p>}
            {fields && <div dangerouslySetInnerHTML={{ __html: fields.main }} />}
          </article>
        </Wrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  .article-hero {
    margin-top: 5rem;
  }
  .article-body {
    margin-bottom: 2rem;
    p {
      font-size: 1rem;
    }
  }
  .hero-left {
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.5rem;
      font-weight: bold;
      line-height: 2rem;
    }
  }
  h1 {
    margin: 1rem 0;
    line-height: 3rem;
    font-size: 3rem;
  }
  hr {
    margin: 1rem 0;
  }
  img {
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30rem;
    height: 20rem;
  }
  button {
    background-color: #09357b;
    color: white;
    font-size: 0.8rem;
    padding: 0.1rem;
    border-radius: 0.2rem;
    text-transform: uppercase;
    width: 10rem;
    height: 2rem;
    cursor: pointer;
    border: none;
    margin-bottom: 1rem;
    outline: 0;
    i {
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 1200px) {
    .article-hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    hr {
      width: 50%;
    }
    .article-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    img {
      justify-self: end;
      margin-top: 0;
    }
    figcaption {
      padding: 0.5rem 3.5rem;
    }
  }
`;

export default ArticlePage;
