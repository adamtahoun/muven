import React, { Component } from 'react';
//import AppBarExample from './Components/app_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/nav_bar/nav_bar';
import SearchBar from './Components/search_bar/search_bar';
//import AppBar from 'material-ui/AppBar';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <NavBar/>
          <h2>Muven</h2>
          <h5>Booking and Networking Apllication for Musicians and Venues</h5>
          <SearchBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
