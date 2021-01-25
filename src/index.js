import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import { ArticlesProvider } from './context/actions/articles';
import { BookmarksProvider } from './context/actions/bookmarks';
import { UtilsProvider } from './context/actions/utils';
import App from './App';
import './index.css';

const container = document.getElementById('root');

ReactDOM.render(
  <ArticlesProvider>
    <BookmarksProvider>
      <UtilsProvider>
        <App />
      </UtilsProvider>
    </BookmarksProvider>
  </ArticlesProvider>,
  container
);

debugContextDevtool(container);
