import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import SearchBox from './SearchBox';
import Logo from '../img/logo.jpg';

const Header = () => {
  // const { openSidebar } = useProductsContext();
  // const { myUser } = useUserContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle">
            {/* <button type="button" className="nav-toggle" onClick={openSidebar}> */}
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
          <Route render={({ history }) => <SearchBox history={history} />} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 5rem;
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
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
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
  @media (min-width: 992px) {
    height: 9rem;
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      flex-direction: column;
      /* display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center; */
    }
    .nav-footer {
      display: flex;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      /* justify-content: center; */
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
        /* text-decoration: none;
        display: inline-block;
        text-align: center;
        list-style: none; */

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
