import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import SignUpForm from './Components/sign_up_form';
import LoginForm from './Components/log_in_form';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path = "/signup" component = {SignUpForm} />
        <Route path = "/login" component = {LoginForm} />
        <Route path = "/" component = {App} />
      </Switch>
    </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
