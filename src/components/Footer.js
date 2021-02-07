import React from 'react';
import styled from 'styled-components';
import { useArticlesContext } from '../context/actions/articles';

const Footer = () => {
  const { isLoading } = useArticlesContext();

  return !isLoading && <Wrapper />;
};

const Wrapper = styled.footer`
  height: 15rem;
  background: #09357b;
  margin-top: 5rem;
`;

export default Footer;
