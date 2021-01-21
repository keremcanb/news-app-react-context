import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { FaBookmark } from 'react-icons/fa';
import { Loader } from '../components';
import { getArticle } from '../store/actions/stories';

const ArticlePage = () => {
  const store = useSelector((state) => state.stories);
  const { article, loading } = store;

  const { section, year, month, day, id } = useParams();
  const selectedArticle = `${section}/${year}/${month}/${day}/${id}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticle(selectedArticle));
  }, [dispatch, selectedArticle]);

  const { webTitle, webPublicationDate, fields } = article;

  return (
    <>
      {!loading ? (
        <Wrapper>
          <div className="article-header">
            <div className="article-header-left">
              <button>
                <FaBookmark />
                Add Bookmark
              </button>
              <Moment format="Do MMMM YYYY, h:mm:ss a">{webPublicationDate}</Moment>
              <h1>{webTitle}</h1>
              <h2>{fields.trailText}</h2>
            </div>
            <div className="article-header-right" />
          </div>
          <hr />
          <article className="article-body">
            <p>{fields.bodyText}</p>
            <img src={fields.thumbnail} alt="headline" />
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
  .article-header {
    margin-top: 5rem;
  }
  .article-header-left {
    display: flex;
    flex-direction: column;
  }
  svg {
    margin-right: 1rem;
    font-size: 0.8rem;
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
    margin: 1rem 0;
    line-height: 3rem;
    font-size: 3rem;
  }
  hr {
    margin: 1rem 0;
  }
  p {
    font-size: 1rem;
  }
  img {
    margin-top: 1rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1200px) {
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
      margin-top: 0;
    }
  }
`;

export default ArticlePage;
