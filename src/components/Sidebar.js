/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import SearchBox from './SearchBox';
import Links from '../constants';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <SidebarContainer>
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <FaTimes className="close-btn" onClick={toggleSidebar} />

      <div className="side-container" onClick={toggleSidebar}>
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
        <Route render={({ history }) => <SearchBox history={history} />} />
      </div>
    </aside>
  </SidebarContainer>
);

const SidebarContainer = styled.aside`
  .sidebar {
    background: #09357b;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: grid;
    place-items: center;
    opacity: 0;
    transition: all 0.3s linear;
    transform: translateX(-100%);
  }
  .show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .sidebar-links li {
    opacity: 0;
  }
  .sidebar-links li a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: all 0.3s linear;
    border-radius: 0.25rem;
    text-decoration: none;
  }
  .sidebar-links li a:hover {
    background: hsl(22, 31%, 81%);
    color: hsl(22, 31%, 52%);
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }
  @media screen and (min-width: 1200px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
  /*
===============
Sidebar Animation
===============
*/
  .sidebar-links li {
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-links li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-links li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-links li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-links li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-links li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
  }
  .sidebar-icons li:nth-of-type(1) {
    animation-delay: 0.25s;
  }
  .sidebar-icons li:nth-of-type(2) {
    animation-delay: 0.5s;
  }
  .sidebar-icons li:nth-of-type(3) {
    animation-delay: 0.75s;
  }
  .sidebar-icons li:nth-of-type(4) {
    animation-delay: 1s;
  }
  .sidebar-icons li:nth-of-type(5) {
    animation-delay: 1.25s;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default Sidebar;
