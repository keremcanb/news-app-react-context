import React from 'react';

const Button = ({ text, onClick }) => (
  <button className="button" type="submit" onClick={onClick}>
    <i className="fa fa-bookmark" aria-hidden="true" />
    {text}
  </button>
);

export default Button;
