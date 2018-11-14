import React from 'react';
import './App.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesGridContainer from '../MoviesGrid/MoviesGridContainer';

const App = () => (
  <div className="main_container">
    <Header />
    <MoviesGridContainer />
    <Footer />
  </div>
);
export default App;
