import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBookmarkItems } from './store/actions/bookmarks';
import { Header, Sidebar, Footer } from './components';
import Routes from './Routes';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getBookmarkItems());
  }, [dispatch]);

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
