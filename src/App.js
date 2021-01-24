import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useBookmarksContext } from './context/actions/bookmarks';
import { Header, Sidebar, Footer } from './components';
import Routes from './Routes';

const App = () => {
  const { getBookmarkItems } = useBookmarksContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getBookmarkItems();
  }, []);

  return (
    <Router>
      {/* <Router forceRefresh> */}
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Routes />
      <Footer />
    </Router>
  );
};

export default App;
