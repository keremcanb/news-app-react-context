import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchBox from './SearchBox';

const Header = () => (
  <Wrapper>
    <div className="logo">
      <Link to="/">
        <img src="/logo.jpg" alt="logo" />
      </Link>
    </div>
    <div className="nav-wrapper">
      <nav className="nav-links">
        <Link to="/">News Today</Link>
        <Link to="/category/sport">Sports</Link>
        <Link to="/category/culture">Culture</Link>
        <Link to="/category/lifeandstyle">Lifestyle</Link>
      </nav>
      <Route render={({ history }) => <SearchBox history={history} />} />
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  background: #09357b;
  .logo {
    margin-left: 0.5rem;
  }
  .nav-links a {
    display: none;
  }

  @media (min-width: 768px) {
    height: 8rem;
    padding-left: 5rem;
    .logo {
      margin-bottom: 0.3rem;
    }
  }

  @media (min-width: 992px) {
    height: 8rem;
    padding-left: 12rem;
    .logo {
      margin-bottom: 0.3rem;
    }
    .nav-wrapper {
      display: grid;
      grid-template-columns: 3fr 1fr;
      .nav-links a {
        color: white;
        text-transform: uppercase;
        list-style: none;
        font-size: 0.8rem;
        padding: 0 4rem 1rem;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        text-align: center;
        line-height: 0.85;
        &:nth-child(1) {
          border-bottom: 3px solid #388e3c;
        }
        &:nth-child(2) {
          border-bottom: 3px solid #f50057;
        }
        &:nth-child(3) {
          border-bottom: 3px solid #ffca28;
        }
        &:nth-child(4) {
          border-bottom: 3px solid #2196f3;
        }
      }
    }
  }
`;

export default Header;
