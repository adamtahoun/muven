import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import SignUpForm from './Components/sign_up_form';
import LoginForm from './Components/log_in_form';
import EditProfile from './Components/edit_profile/edit_profile';
import Profile from './Components/profile/profile';
import SearchResult from './Components/search_bar/search_result';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path = "/signup" component = {SignUpForm} />
        <Route path = "/login" component = {LoginForm} />
        <Route path ="/edit" component = {EditProfile} />
        <Route path = "/profile" component = {Profile} />
        <Route path = "/results" component = {SearchResult} />
        <Route path = "/" component = {App} />
      </Switch>
    </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
