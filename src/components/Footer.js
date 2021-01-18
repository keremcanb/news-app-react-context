import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Footer = () => {
  const stories = useSelector((state) => state.stories);
  const { loading } = stories;

  return !loading && <Wrapper />;
};

const Wrapper = styled.footer`
  width: 100%;
  height: 15rem;
  display: grid;
  background: #09357b;
  margin-top: 5rem;
`;

export default Footer;
