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
      <Route path="/category/:section">
        <Category />
      </Route>
      <Route path="/article/:section/:year/:month/:day/:title">
        <Article />
      </Route>
      <Route path="/search/:query" render={({ match }) => <Search query={match.params.query} />} />
    </Switch>
  </main>
);

export default Routes;
