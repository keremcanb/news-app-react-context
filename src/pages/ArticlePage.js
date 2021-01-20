import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Loader } from '../components';

const ArticlePage = () => {
  const store = useSelector((state) => state.stories);
  const { stories, loading } = store;

  const { section, year, month, day, id } = useParams();
  const currentArticle = `${section}/${year}/${month}/${day}/${id}`;

  const article = stories.find((story) => story.id === currentArticle);
  const {
    fields: { headline, bodyText, thumbnail },
    webPublicationDate,
    webTitle
  } = article;

  return (
    <>
      {!loading ? (
        <Wrapper>
          <div className="article-header">
            <div className="article-header-left">
              <button>
                <i className="fa fa-bookmark" aria-hidden="true" />
                Add Bookmark
              </button>
              <Moment format="Do MMMM YYYY, h:mm:ss a">{webPublicationDate}</Moment>
              <h1>{webTitle}</h1>
              {headline && <h4>{headline}</h4>}
            </div>
            <div className="article-header-right" />
          </div>
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
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  .article-header {
    margin-top: 5rem;
  }
  .article-header-left {
    display: flex;
    flex-direction: column;
  }
  i {
    margin-right: 1rem;
  }
  button {
    background-color: #09357b;
    color: white;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 0.2rem;
    text-transform: uppercase;
    width: 10rem;
    height: 2rem;
    cursor: pointer;
    border: none;
    margin-bottom: 1rem;
  }
  h1 {
    margin-top: 1rem;
  }
  hr {
    margin: 1rem 0;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .article-header {
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
    }
  }
`;

export default ArticlePage;
