import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useUtilsContext } from '../context/actions/utils';
import Button from './Button';

const PageHero = ({ title, isBookmark, isSort }) => {
  const { sort, updateSort } = useUtilsContext();

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
          <select name="sort" id="sort" value={sort} onChange={updateSort}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
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
    justify-content: space-around;
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
