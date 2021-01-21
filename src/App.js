import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBookmarkItems } from './store/actions/bookmarks';
import { Home, Category, Article, Bookmarks, SearchResults } from './pages';
import { Header, Sidebar, Footer } from './components';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

  return (
    <Router>
      {/* <Router forceRefresh> */}
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
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
};

export default App;
