import React from 'react';
import AppBar from 'material-ui/AppBar';
import './nav_bar.css';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const buttonStyle = {
    margin: 14,
};


const NavBar = () => (
  <div className="NavBar">
  <nav>
  <Link to='./'>
    <FlatButton label = "Home" primary = {true} style = {buttonStyle}/>
  </Link>
  <Link to="./login">
    <FlatButton label = "Login" primary = {true} style = {buttonStyle}/>
  </Link>
    <Link to="./signup">
    <FlatButton label = "Sign Up" primary = {true} style = {buttonStyle}/>
    </Link>
  </nav>
  </div>
);

export default NavBar;
