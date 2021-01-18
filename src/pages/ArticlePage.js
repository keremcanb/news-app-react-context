import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Loader } from '../components';

const ArticlePage = () => {
  const news = useSelector((state) => state.stories);
  const { stories, loading } = news;

  const location = useLocation();
  const article = location.pathname.replace('/', '');
  const currentArticle = stories.find((story) => story.id === article);
  const {
    fields: { headline, bodyText, thumbnail },
    webPublicationDate,
    webTitle
  } = currentArticle;

  return (
    <>
      {!loading ? (
        <Wrapper>
          <article className="article-header">
            <div className="button-group">
              <button>
                <i className="fa fa-bookmark" aria-hidden="true" />
                Add Bookmark
              </button>
            </div>
            <Moment format="Do MMMM YYYY, h:mm:ss a">{webPublicationDate}</Moment>
            <h1>{webTitle}</h1>
            {headline && <h2>{headline}</h2>}
          </article>
          <hr />
          <article className="article-body">
            {bodyText}
            {/* <div dangerouslySetInnerHTML={{ __html: body }} /> */}
            <img src={thumbnail} alt="headline" />
          </article>
        </Wrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

const Wrapper = styled.section`
  hr {
    width: 50%;
  }
  .button-group {
    margin-top: 2rem;
    margin-bottom: 1rem;
    button {
      margin-right: 2rem;
      background-color: #09357b;
      color: white;
      font-size: 0.8rem;
      padding: 0.5rem;
      border-radius: 0.2rem;
      text-transform: uppercase;
      width: 8rem;
      height: 3rem;
      cursor: pointer;
      border: none;
      i {
        padding-right: 1rem;
      }
    }
  }
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
  @media (min-width: 992px) {
    padding: 0 10rem;
    .article-header {
      margin-top: 5rem;
      margin-bottom: 1rem;
      display: grid;
      grid-template-rows: 1fr 1fr;
      padding-right: 40rem;
    }
    .article-body {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      img {
        margin-left: 1.5rem;
      }
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .button-group {
      button {
        width: 10rem;
        height: 2rem;
      }
    }
  }
`;

export default ArticlePage;
