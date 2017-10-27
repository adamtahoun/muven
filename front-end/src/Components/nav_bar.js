import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: 14,
};

const NavBar = () => (
  <AppBar
  title="Muven"
  showMenuIconButton = {false}
  >
  <Link to="./login">
    <RaisedButton label = "Login" primary = {true} style = {buttonStyle}/>
  </Link>
    <Link to="./signup">
    <RaisedButton label = "Sign Up" primary = {true} style = {buttonStyle}/>
    </Link>
  </AppBar>
);

export default NavBar;
