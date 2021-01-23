import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ articles }) => (
  <Wrapper>
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
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
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export default ArticleGrid;
