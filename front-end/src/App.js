import React, { Component } from 'react';
//import AppBarExample from './Components/app_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/nav_bar';
import SearchBar from './Components/search_bar';
//import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
      <div>
        <NavBar/>
        <SearchBar />
      </div>
      </MuiThemeProvider>
      <h2>Muven</h2>
      <h5>Booking and Networking Apllication for Musicians and Venues</h5>
      </div>
    );
  }
}

export default App;
