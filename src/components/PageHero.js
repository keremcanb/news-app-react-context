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
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 3rem 0;
  .title {
    font-size: 1.7rem;
  }
  .input-group {
    margin-top: 1rem;
  }
  button {
    background-color: #09357b;
    color: white;
    border-radius: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    width: 11rem;
    height: 2rem;
  }
  i {
    margin-right: 0.5rem;
  }
  select {
    margin-left: 2rem;
    border-width: 0 0 1px;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    padding: 0.5rem;

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
  }
`;

export default PageHero;
