import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
import PageLinks from '../constants/navlinks';
import { useUtilsContext } from '../context/actions/utils';

const Header = ({ history, handleSubmit }) => {
  const { openSidebar } = useUtilsContext();

  return (
    <Wrapper>
      <nav className="nav-container">
        <div className="nav-top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <FaBars className="nav-toggle" onClick={openSidebar} />
        </div>
        <div className="nav-bottom">
          <PageLinks styleClass="nav-links" />
          <div className="searchbox">
            <SearchBox history={history} handleSubmit={handleSubmit} />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 100px;
  background: #09357b;
  .nav-container {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  .nav-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    width: 175px;
  }
  .nav-toggle {
    margin-top: 1rem;
    background: transparent;
    border: transparent;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s linear;
    outline: 0;
    font-size: 2rem;
  }
  .nav-toggle:hover {
    color: #fff;
    transform: rotate(90deg);
  }
  .nav-links {
    display: none;
  }
  @media (max-width: 1200px) {
    .searchbox {
      display: none;
    }
  }
  @media screen and (min-width: 1200px) {
    height: 140px;
    .nav-container {
      display: flex;
      flex-direction: column;
    }
    .nav-bottom {
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      display: flex;
      li {
        padding: 1rem 4rem 1rem;
        font-weight: bold;
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
        a {
          text-transform: uppercase;
          color: #fff;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
        }
      }
    }
    .nav-toggle {
      display: none;
    }
  }
`;

export default Header;
