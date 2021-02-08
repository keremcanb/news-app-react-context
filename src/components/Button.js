import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Button = ({ text, onClick }) => (
  <button className="button" type="submit" onClick={onClick}>
    <span className="icon">
      <FaBookmark />
    </span>
    {text}
  </button>
);

export default Button;
