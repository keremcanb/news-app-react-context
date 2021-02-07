import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Sidebar, Footer } from './components';
import Routes from './constants/routes';

const App = () => (
  <Router>
    <Header />
    <Sidebar />
    <Routes />
    <Footer />
  </Router>
);

export default App;
