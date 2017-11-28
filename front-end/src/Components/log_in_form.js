import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar/nav_bar';

import "../App.css"



class LoginForm extends Component{
  render(){
    return(
		<div className = "Login">
			<MuiThemeProvider>
				<div>
					<NavBar/>
					<br/>
					<br/>
					<br/>

					<center>

					<h1> Log in to your Artist or Venue account!</h1>
					<Card className = "LoginCard">
					<div>
						<TextField
						hintText="Enter your Username"
						floatingLabelText="Username"
						/>
						<br />
						<TextField
						hintText="Password Field"
						floatingLabelText="Password"
						type="password"
						/>
					</div>
					<br/>
					<br/><br/>
					<CardActions>
					<RaisedButton label ="Login"/>
					<Link to="./signup">
    <RaisedButton label = "Need an account?" primary = {true} />
  </Link>
					</CardActions>
					</Card>
					</center>
				</div>
			</MuiThemeProvider>
		</div>

    );
  }
}

export default LoginForm;
