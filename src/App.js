import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Header, Sidebar, Footer } from './components';
import Routes from './constants/routes';

const App = () => (
  <Router>
    <Header />
    <Sidebar />
    <Routes />
    <Footer />
    <ScrollToTop showUnder={160}>
      <FaArrowCircleUp style={{ fontSize: '3rem', color: '#09357B' }} />
    </ScrollToTop>
  </Router>
);

export default App;
