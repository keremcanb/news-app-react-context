import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageHero = ({ stories, title, bookmark, sort }) => {
  // const sorted = stories.sort((a, b) => b.webPublicationDate - a.webPublicationDate);

  // console.log(sorted);

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
            <button>
              <i className="fa fa-bookmark" aria-hidden="true" />
              View Bookmarks
            </button>
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
  justify-content: space-between;
  padding: 3rem 0;
  .title {
    font-size: 2rem;
  }
  button {
    margin-top: 1rem;
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
  }
  i {
    margin-right: 1rem;
  }
  select {
    margin-left: 2rem;
    outline: 0;
    border-width: 0 0 2px;
    font-size: 1rem;
    padding: 0.5rem;
    width: 10rem;
    height: 3rem;
    cursor: pointer;
  }
  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    h1 {
      font-size: 3rem;
    }
    button {
      width: 10rem;
      height: 2rem;
    }
    select {
      font-size: 1rem;
      padding: 0.5rem;
      width: 15rem;
      height: 3rem;
    }
  }
`;

export default PageHero;
