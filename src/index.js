import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store, { history } from "./redux/store";
import Main from "./containers/index";
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


