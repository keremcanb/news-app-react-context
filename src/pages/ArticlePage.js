import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import { useArticlesContext } from '../context/actions/articles';
import { useBookmarksContext } from '../context/actions/bookmarks';
import { Loader, Button } from '../components';

const ArticlePage = () => {
  const { bookmarkItems, bookmarkItem, unBookmarkItem } = useBookmarksContext();
  const { isLoading, article, getArticle } = useArticlesContext();
  const { webTitle, webPublicationDate, fields } = article;
  const { section, year, month, day, title } = useParams();
  const id = `${section}/${year}/${month}/${day}/${title}`;

  useEffect(() => {
    getArticle(id);
  }, [id]);

  const isBookmark = (item) => {
    if (bookmarkItems !== null) {
      return bookmarkItems.findIndex((bookmark) => bookmark.id === item.id) > -1;
    }
  };

  return (
    <>
      {!isLoading ? (
        <Wrapper className="section-center">
          <div className="article-hero">
            <div className="hero-left">
              <div>
                {isBookmark(article) ? (
                  <Button text="Remove Bookmark" icon="fa fa-bookmark" onClick={() => unBookmarkItem(article)} />
                ) : (
                  <Button text="Add Bookmark" icon="fa fa-bookmark-o" onClick={() => bookmarkItem(article)} />
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
      font-size: 1.1rem;
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
      grid-template-columns: repeat(2, 1fr);
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
