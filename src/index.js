import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import App from './App';
import './index.css';
import { ArticlesProvider } from './context/actions/articles';
import { BookmarksProvider } from './context/actions/bookmarks';
import { SortProvider } from './context/actions/sort';

const container = document.getElementById('root');

ReactDOM.render(
  <ArticlesProvider>
    <BookmarksProvider>
      <SortProvider>
        <App />
      </SortProvider>
    </BookmarksProvider>
  </ArticlesProvider>,
  container
);

debugContextDevtool(container);
