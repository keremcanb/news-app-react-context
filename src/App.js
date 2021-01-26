import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useBookmarksContext } from './context/actions/bookmarks';
import { Header, Sidebar, Footer } from './components';
import { Home, Category, Article, Bookmarks, SearchResults } from './pages';

const App = () => {
  const { getBookmarkItems } = useBookmarksContext();

  useEffect(() => {
    getBookmarkItems();
  }, []);

  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <Router forceRefresh>
      <Route render={() => <Header handleSubmit={handleSubmit} />} />
      <Sidebar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route
            path="/search/:searchInput"
            render={({ match }) => <SearchResults searchTerm={match.params.searchInput} />}
          />
          <Route path="/article/:section/:year/:month/:day/:id">
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
};

export default App;
