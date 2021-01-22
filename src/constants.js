import React from 'react';
import { Link } from 'react-router-dom';

export const links = [
  {
    id: 1,
    text: 'News Today',
    url: '/'
  },
  {
    id: 2,
    text: 'Sports',
    url: '/category/sport'
  },
  {
    id: 3,
    text: 'Culture',
    url: '/category/culture'
  },
  {
    id: 4,
    text: 'Lifestyle',
    url: '/category/lifeandstyle'
  }
];

const tempLinks = links.map(({ id, url, text }) => (
  <li key={id}>
    <Link to={url}>{text}</Link>
  </li>
));

export default ({ styleClass }) => <ul className={`page-links ${styleClass || ''}`}>{tempLinks}</ul>;
