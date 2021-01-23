import React from 'react';
import styled from 'styled-components';
import HomeCard from './HomeCard';

const Storygrid = ({ stories }) => (
  <Wrapper>
    {stories.map((story) => (
      <HomeCard key={story.id} story={story} />
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
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    /* gap: 1rem;
    max-width: 80vw;
    margin: 0 auto; */
    list-style: none;
    padding: 0;
  }
`;

export default Storygrid;
