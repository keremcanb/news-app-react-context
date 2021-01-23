import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Footer = () => {
  const articles = useSelector((state) => state.articles);
  const { loading } = articles;

  return !loading && <Wrapper />;
};

const Wrapper = styled.footer`
  height: 15rem;
  background: #09357b;
`;

export default Footer;
