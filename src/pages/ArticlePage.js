import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Loader, Button } from '../components';
import { getArticle } from '../store/actions/stories';

const ArticlePage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.stories);
  const { article, loading } = store;

  const { section, year, month, day, id } = useParams();
  const selectedArticle = `${section}/${year}/${month}/${day}/${id}`;

  useEffect(() => {
    dispatch(getArticle(selectedArticle));
  }, [dispatch, selectedArticle]);

  const { webTitle, webPublicationDate, fields } = article;
  console.log(article);

  return (
    <>
      {!loading ? (
        <Wrapper>
          <div className="article-hero">
            <div className="hero-left">
              <Button text="Add Bookmark" />
              <Moment format="Do MMMM YYYY, h:mm:ss a">{webPublicationDate}</Moment>
              <h1>{webTitle}</h1>
              <h2 dangerouslySetInnerHTML={{ __html: fields.standfirst }} />
            </div>
            <div className="hero-right" />
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
  .article-hero {
    margin-top: 5rem;
  }
  .article-body {
    margin-bottom: 2rem;
  }
  .hero-left {
    display: flex;
    flex-direction: column;
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
  }
`;

export default ArticlePage;
