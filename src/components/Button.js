import React from 'react';
import styled from 'styled-components';

const Button = ({ text }) => (
  <Wrapper>
    <i className="fa fa-bookmark" aria-hidden="true" />
    {text}
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  background-color: #09357b;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  text-transform: uppercase;
  width: 10rem;
  height: 2rem;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
  i {
    margin-right: 0.5rem;
  }
`;
