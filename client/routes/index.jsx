import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import StartPage from './StartPage';

const RootPage = () => (
  <Router>
    <div styleName="page">
      <Route exact path="/" component={StartPage} />
    </div>
  </Router>
);

export default RootPage;
