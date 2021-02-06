import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Category, Article, Bookmarks, Search } from '../pages';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/bookmarks">
        <Bookmarks />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/category/:section">
        <Category />
      </Route>
      <Route path="/article/:section/:year/:month/:day/:title">
        <Article />
      </Route>
    </Switch>
  </main>
);

export default Routes;
