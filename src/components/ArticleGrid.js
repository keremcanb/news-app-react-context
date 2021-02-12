import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import ArticleCard from './ArticleCard';
import { useArticlesContext } from '../context/providers/articles';

const ArticleGrid = ({ articles }) => {
  const { infiniteScrollHandler } = useArticlesContext();

  return (
    <InfiniteScroll dataLength={articles.length} next={infiniteScrollHandler} hasMore>
      <Wrapper className="section-center">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  column-gap: 2rem;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
`;

export default ArticleGrid;
