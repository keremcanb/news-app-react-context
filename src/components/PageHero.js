import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';
import Button from './Button';

const PageHero = ({ title, isBookmark, isSort, isLink }) => {
  const { sort, sortHandler } = useArticlesContext();

  return (
    <Wrapper className="section-center">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="input-group">
        {isBookmark && (
          <Link to="/bookmarks">
            <Button text="View Bookmarks" />
          </Link>
        )}
        {isSort && (
          <select name="sort" id="sort" value={sort} onChange={sortHandler}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        )}
        {isLink && (
          <ul>
            <Link to="/category/sport">
              <li>See all</li>
            </Link>
          </ul>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
  }
  select {
    border-width: 0 0 1px;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    padding: 0.5rem;
    outline: 0;
    cursor: pointer;
    margin-top: 1rem;
  }
  li {
    text-decoration: underline;
    font-size: 1.2rem;
    color: #2a9af3;
    font-weight: bold;
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .input-group {
      flex-direction: row;
    }
    select {
      margin-left: 2rem;
      margin-top: 0;
    }
    flex-direction: row;
  }
  @media screen and (min-width: 992px) {
    select {
      width: 15rem;
    }
    h1 {
      margin: 1rem 0;
    }
  }
  @media screen and (min-width: 1200px) {
    .title {
      font-size: 2.5rem;
    }
  }
`;

export default PageHero;
