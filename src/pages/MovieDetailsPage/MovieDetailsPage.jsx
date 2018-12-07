import React from 'react';
import './MovieDetailsPage.scss';
import Footer from '../../components/Footer/Footer';
import MoviesGrid from '../../components/MoviesGrid';
import Header from '../../components/Header';

const MovieDetailsPage = () => (
  <div className="main_container">
    <Header />
    <MoviesGrid />
    <Footer />
  </div>
);

export default MovieDetailsPage;
