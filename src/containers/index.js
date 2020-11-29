import React from "react";
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import SignIn from "./signin";
import SignUp from "./signup";
import MainApp from "./main";


const RestrictedRoute = ({ component: Component, location, token, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: location }
          }}
        />}
  />;

const Main = () => {

  const { token, initURL } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  return (
    <Switch>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <RestrictedRoute path={`${match.url}`} token={token} location={location}
        component={MainApp} />
    </Switch>
  )
}

export default Main;