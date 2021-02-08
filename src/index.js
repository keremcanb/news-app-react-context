import React from 'react';
import ReactDOM from 'react-dom';
import { debugContextDevtool } from 'react-context-devtool';
import { ArticlesProvider } from './context/providers/articles';
import { BookmarksProvider } from './context/providers/bookmarks';
import { SidebarProvider } from './context/providers/sidebar';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';

const container = document.getElementById('root');
serviceWorkerRegistration.register();
reportWebVitals();

ReactDOM.render(
  <ArticlesProvider>
    <BookmarksProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BookmarksProvider>
  </ArticlesProvider>,
  container
);

debugContextDevtool(container);
