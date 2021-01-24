import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ArticlesProvider } from './context/actions/articles';
import { BookmarksProvider } from './context/actions/bookmarks';

ReactDOM.render(
  <ArticlesProvider>
    <BookmarksProvider>
      <App />
    </BookmarksProvider>
  </ArticlesProvider>,

  document.getElementById('root')
);
