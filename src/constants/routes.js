import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Category, Article, Bookmarks, SearchResults } from '../pages';

const Routes = () => (
  <main>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/bookmarks">
        <Bookmarks />
      </Route>
      <Route path="/category/:id">
        <Category />
      </Route>
      <Route path="/article/:section/:year/:month/:day/:id">
        <Article />
      </Route>
      <Route path="/search/:keyword" render={({ match }) => <SearchResults keyword={match.params.keyword} />} />
    </Switch>
  </main>
);

export default Routes;
