import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Category, Article, Bookmarks, SearchResults } from './pages';
import { Header, Footer } from './components';

const App = () => (
  <Router forceRefresh>
    <Header />
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
        <Route path="/:section/:year/:month/:day/:id">
          <Article />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
