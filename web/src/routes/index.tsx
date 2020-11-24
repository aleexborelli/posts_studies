import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
