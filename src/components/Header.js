import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SearchBox from './SearchBox';
import Logo from '../assets/logo.jpg';

const Header = ({ toggleSidebar }) => (
  <Wrapper>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <button type="button" className="nav-toggle" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <div className="nav-footer">
        <nav className="nav-links">
          <Link to="/">News Today</Link>
          <Link to="/category/sport">Sports</Link>
          <Link to="/category/culture">Culture</Link>
          <Link to="/category/lifeandstyle">Lifestyle</Link>
        </nav>
        <div className="searchbox">
          <Route render={({ history }) => <SearchBox history={history} />} />
        </div>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.header`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09357b;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 175px;
  }
  .nav-toggle {
    margin-right: 1rem;
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (max-width: 992px) {
    .searchbox {
      display: none;
    }
  }
  @media (min-width: 992px) {
    height: 9rem;
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      flex-direction: column;
    }
    .nav-footer {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      display: flex;
      margin-right: 5rem;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: white;
        text-transform: uppercase;
        font-size: 0.8rem;
        padding: 1.3rem 4rem 1rem;
        font-weight: bold;
        line-height: 0.85;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        list-style: none;
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
