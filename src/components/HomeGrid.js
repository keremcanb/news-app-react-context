import React from 'react';
import styled from 'styled-components';
import HomeCard from './HomeCard';

const HomeGrid = ({ articles }) => (
  <Wrapper className="section-center">
    {articles.map((article) => (
      <HomeCard key={article.id} article={article} />
    ))}
  </Wrapper>
);

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  column-gap: 2rem;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export default HomeGrid;
