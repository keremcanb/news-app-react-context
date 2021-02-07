import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SearchBox from './SearchBox';
import logo from '../assets/logo.png';
import PageLinks from '../constants/navlinks';
import { useUtilsContext } from '../context/actions/utils';

const Header = ({ handleSubmit }) => {
  const { openSidebar } = useUtilsContext();

  return (
    <Wrapper>
      <nav className="section-center">
        <div className="nav-top">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <FaBars className="nav-toggle" onClick={openSidebar} />
        </div>
        <div className="nav-bottom">
          <PageLinks styleClass="nav-links" />
          <div className="searchbox">
            <SearchBox handleSubmit={handleSubmit} />
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 144px;
  background: #09357b;
  .searchbox {
    display: flex;
    justify-content: flex-end;
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
  @media screen and (min-width: 1200px) {
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
