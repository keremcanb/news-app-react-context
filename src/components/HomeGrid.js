import React from 'react';
import styled from 'styled-components';
import HomeCard from './HomeCard';

const ArticleGrid = ({ articles }) => (
  <Wrapper>
    {articles.map((article) => (
      <HomeCard key={article.id} article={article} />
    ))}
  </Wrapper>
);

const Wrapper = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  justify-items: center;
  column-gap: 2rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
  @media screen and (min-width: 1200px) {
    width: 95vw;
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export default ArticleGrid;
