import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import PageNotFound from '../../pages/PageNotFound';
import Footer from '../Footer';
import Header from '../Header';

const App = () => (
  <div className="main_container">
    <Header />
    <Switch>
      <Route exact path="/" component={MovieDetailsPage} />
      <Route exact path="/films" component={MovieDetailsPage} />
      <Route exact path="/film" component={MovieDetailsPage} />
      <Route exact path="/search" component={MovieDetailsPage} />
      <Route exact path="/genres" component={MovieDetailsPage} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
