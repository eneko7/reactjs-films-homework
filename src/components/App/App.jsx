import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import MovieDetailsPage from '../../pages/MovieDetailsPage';

const App = () => (
  <Switch>
    <Route exact path="/" component={MovieDetailsPage} />
    <Route exact path="/films/:film" component={MovieDetailsPage} />
    <Route exact path="/films" component={MovieDetailsPage} />
    <Route exact path="/search" component={MovieDetailsPage} />
    <Route exact path="/:sort" component={MovieDetailsPage} />
    <Route exact path="/genre" component={MovieDetailsPage} />
  </Switch>
);

export default App;
