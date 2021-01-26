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

  return (
    <Router forceRefresh>
      <Header />
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
            path="/search/:keyword"
            render={({
              match: {
                params: { keyword }
              }
            }) => <SearchResults keyword={keyword} />}
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
