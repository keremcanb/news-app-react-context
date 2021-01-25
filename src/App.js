import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useBookmarksContext } from './context/actions/bookmarks';
import { Header, Sidebar, Footer } from './components';
import Routes from './constants/routes';

const App = () => {
  const { getBookmarkItems } = useBookmarksContext();

  useEffect(() => {
    getBookmarkItems();
  }, []);

  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
