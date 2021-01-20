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

export default Storygrid;
