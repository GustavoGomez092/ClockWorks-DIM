import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default function Routes() {
  return (
    <App>
      <Router>
      <Switch>
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
      </Router>
    </App>
  );
}
