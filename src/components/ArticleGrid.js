import React from 'react';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';

const ArticleGrid = ({ articles }) => (
  <Wrapper className="section-center">
    {articles.map((article) => (
      <ArticleCard key={article.id} article={article} />
    ))}
  </Wrapper>
);

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    column-gap: 2rem;
  }
`;

export default ArticleGrid;
