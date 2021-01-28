import React from 'react';

const Button = ({ text, icon, onClick }) => (
  <button className="button" type="submit" onClick={onClick}>
    <i className={icon} aria-hidden="true" />
    {text}
  </button>
);

export default Button;
