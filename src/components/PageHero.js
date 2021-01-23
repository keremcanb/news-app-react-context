import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from './Button';

const PageHero = ({ title, bookmark, sort }) => {
  const store = useSelector((state) => state.articles);
  const { articles } = store;

  // const newest = articles.sort((a, b) => b.webPublicationDate - a.webPublicationDate);
  // const oldest = articles.sort((a, b) => a.webPublicationDate - b.webPublicationDate);

  // console.log(newest);
  // console.log(oldest);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    if (value === 'newest') {
      console.log('Newest');
    }
    if (value === 'oldest') {
      console.log('Oldest');
    }
  };

  return (
    <Wrapper>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="input-group">
        {bookmark && (
          <Link to="/bookmarks">
            <Button text="View Bookmarks" />
          </Link>
        )}

        {sort && (
          <select name="sort" id="sort" onChange={onChangeHandler}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 2rem;
  .title {
    font-size: 1.7rem;
  }
  .input-group {
    margin: 2rem 0 1.5rem 0;
  }
  select {
    margin-left: 2rem;
    border-width: 0 0 1px;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    padding: 0.5rem;
    outline: 0;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
    width: 95vw;
    select {
      width: 15rem;
    }
  }
  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    .title {
      font-size: 2.5rem;
    }
  }
`;

export default PageHero;
