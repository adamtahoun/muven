import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './Components/nav_bar/nav_bar';
import SearchBar from './Components/search_bar/search_bar';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
			<div>
          <NavBar/>
           <center>
          <h2>Muven</h2>
          <h5>Booking and Networking Application <br/> for Musicians and Venues</h5>
          <SearchBar />
		  </center>
		  </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
