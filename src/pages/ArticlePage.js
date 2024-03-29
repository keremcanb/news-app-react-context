import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Helmet } from 'react-helmet';
import { useArticlesContext } from '../context/providers/articles';
import { useBookmarksContext } from '../context/providers/bookmarks';
import { Loader, Button } from '../components';
import { isBookmark } from '../constants/helpers';

const ArticlePage = () => {
  const { bookmarkItem, unBookmarkItem } = useBookmarksContext();
  const { article, loading, fetchArticle } = useArticlesContext();
  const { webTitle, webPublicationDate, fields } = article;
  const { section, year, month, day, title } = useParams();
  const id = `${section}/${year}/${month}/${day}/${title}`;

  useEffect(() => {
    fetchArticle(id);
  }, [id]);

  if (loading) return <Loader />;
  return (
    <Wrapper className="section-center">
      <Helmet>
        <title>{webTitle}</title>
      </Helmet>
      <div className="article-hero">
        <div className="hero-left">
          <div>
            {isBookmark(article) ? (
              <Button text="Remove Bookmark" onClick={() => unBookmarkItem(article)} />
            ) : (
              <Button text="Add Bookmark" onClick={() => bookmarkItem(article)} />
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
        {fields && <div dangerouslySetInnerHTML={{ __html: fields.body }} />}
        {fields && <div dangerouslySetInnerHTML={{ __html: fields.main }} />}
      </article>
    </Wrapper>
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
      margin-bottom: 1rem;
    }
    h2 {
      margin-bottom: 1rem;
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
