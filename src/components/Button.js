import React from 'react';

const Button = ({ text }) => (
  <button type="submit">
    <i className="fa fa-bookmark" aria-hidden="true" />
    {text}
  </button>
);

export default Button;
