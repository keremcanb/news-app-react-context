import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImageCard = ({ story: { id, webTitle } }) => (
  <Wrapper>
    <Link to={`/${id}`}>
      <div className="card-title">
        <h2>{webTitle}</h2>
      </div>
    </Link>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  width: 22rem;
  overflow: hidden;
  box-shadow: 5px 5px 5px #aaaaaa;
  .card-title {
    position: absolute;
    height: 9rem;
    width: 100%;
    top: 10rem;
    color: white;
    background-color: #0c3371;
    padding: 1rem;
    opacity: 0.9;
    border-bottom: 3px solid #d32f2f;
  }
`;

export default ImageCard;
