import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import MovieDetail from './pages/movieDetail/movieDetail.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/movies/:movieId' component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
