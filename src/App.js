import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Category, Article, Bookmarks, SearchResults } from './pages';
import { Header, Sidebar, Footer } from './components';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
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
