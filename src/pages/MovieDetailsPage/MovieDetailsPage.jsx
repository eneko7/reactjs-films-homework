import React from 'react';
import './MovieDetailsPage.scss';
import Footer from '../../components/Footer/Footer';
import MoviesGridContainer from '../../components/MoviesGrid/MoviesGridContainer';
import HeaderContainer from '../../components/Header/HeaderContainer';

const MovieDetailsPage = () => (
  <div className="main_container">
    <HeaderContainer />
    <MoviesGridContainer />
    <Footer />
  </div>
);

export default MovieDetailsPage;
