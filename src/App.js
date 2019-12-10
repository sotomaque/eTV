import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'

import HomePage from './homepage.component';
import MovieList from './components/movie-list/MovieList.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie" component={MovieList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
