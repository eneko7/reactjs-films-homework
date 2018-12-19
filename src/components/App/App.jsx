import React from 'react';
import './App.scss';
import Footer from '../Footer/Footer';
import MoviesGrid from '../MoviesGrid';
import Header from '../Header';

const App = () => (
  <div className="main_container">
    <Header />
    <MoviesGrid />
    <Footer />
  </div>
);

export default App;
