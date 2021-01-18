import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageHero = ({ title, bookmark, sort }) => (
  <Wrapper>
    <h1>{title}</h1>
    <div className="button-group">
      {bookmark && (
        <Link to="/bookmarks">
          <button>
            <i className="fa fa-bookmark" aria-hidden="true" />
            View Bookmarks
          </button>
        </Link>
      )}
      {sort && (
        <select>
          <option value="">Newest first</option>
          <option value="">Oldest first</option>
          <option value="">Most popular</option>
        </select>
      )}
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  margin-top: 1rem;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  .button-group {
    margin-top: 2rem;
    text-align: center;
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
    select {
      outline: 0;
      border-width: 0 0 2px;
      font-size: 1rem;
      padding: 0.5rem;
      width: 10rem;
      height: 3rem;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;
    h1 {
      padding-top: 2rem;
    }
    .button-group {
      margin-top: 2rem;

      button {
        width: 10rem;
        height: 2rem;
      }

      select {
        font-size: 1rem;
        padding: 0.5rem;
        width: 12rem;
        height: 3rem;
      }
    }
  }
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding: 0 12rem;
    margin-bottom: 2rem;
    h1 {
      font-size: 3rem;
    }
    .button-group {
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
  }
`;

export default PageHero;
