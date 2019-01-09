import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import MoviesGrid from '../MoviesGrid';
import PageNotFound from '../../pages/PageNotFound';
import Footer from '../Footer';
import Header from '../Header';

const App = () => (
  <div className="main_container">
    <Header />
    <Switch>
      <Route exact path="/" component={MoviesGrid} />
      <Route exact path="/films" component={MoviesGrid} />
      <Route exact path="/film" component={MoviesGrid} />
      <Route exact path="/search" component={MoviesGrid} />
      <Route exact path="/genres" component={MoviesGrid} />
      <Route path="*" component={PageNotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
