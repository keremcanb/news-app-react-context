import React from 'react';
import styled from 'styled-components';
import ImageCard from './ImageCard';

const Storygrid = ({ stories }) => (
  <Wrapper>
    {stories.map((story) => (
      <ImageCard key={story.id} story={story} />
    ))}
  </Wrapper>
);

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  grid-gap: 2rem;
  justify-items: center;
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 5rem;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;
    h1 {
      font-size: 3rem;
    }
  }
`;

export default Storygrid;
