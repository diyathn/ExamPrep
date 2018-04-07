import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/home/HomePage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" compoenent={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
