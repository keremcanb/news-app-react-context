import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import { useArticlesContext } from '../context/actions/articles';
import { useBookmarksContext } from '../context/actions/bookmarks';
import { Loader } from '../components';

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
      return bookmarkItems.findIndex((bookmark) => bookmark.id === item.id) > -1;
    }
  };

  return (
    <>
      {!loading ? (
        <Wrapper className="section-center">
          <div className="article-hero">
            <div className="hero-left">
              <div>
                {isBookmark(article) ? (
                  <button className="button" onClick={() => unBookmarkItem(article)} type="submit">
                    <i className="fa fa-bookmark" aria-hidden="true" />
                    Remove Bookmark
                  </button>
                ) : (
                  <button className="button" onClick={() => bookmarkItem(article)} type="submit">
                    <i className="fa fa-bookmark-o" aria-hidden="true" />
                    Add Bookmark
                  </button>
                )}
              </div>
              <Moment format="Do MMMM YYYY, h:mm:ss a" className="date">
                {webPublicationDate}
              </Moment>
              <h1>{webTitle}</h1>
              {fields && <h2 dangerouslySetInnerHTML={{ __html: fields.standfirst }} />}
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
  display: flex;
  flex-direction: column;
  .date {
    margin: 1rem 0;
  }
  figure {
    img {
      width: 100%;
      height: 70%;
    }
  }
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
    margin-bottom: 1rem;
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
  @media (min-width: 740px) {
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
      padding: 0 1rem;
      margin-top: 0;
    }

    figcaption {
      padding: 0.5rem 1.5rem;
    }
  }
`;

export default ArticlePage;
