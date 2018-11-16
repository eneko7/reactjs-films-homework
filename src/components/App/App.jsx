import React from 'react';
import './App.scss';
import Footer from '../Footer/Footer';
import MoviesGridContainer from '../MoviesGrid/MoviesGridContainer';
import HeaderContainer from '../Header/HeaderContainer';

const App = () => (
  <div className="main_container">
    <HeaderContainer />
    <MoviesGridContainer />
    <Footer />
  </div>
);
export default App;
