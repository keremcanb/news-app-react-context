import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Category, Article, Bookmarks, SearchResults } from './pages';

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/search/:keyword">
          <SearchResults />
        </Route>
        <Route path="/article/:section/:year/:month/:day/:id">
          <Article />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
