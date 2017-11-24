import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar/nav_bar';

import "../App.css"


	const buttonStyle = {
    margin: 8,
};
class SignupForm extends Component{

	
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
					
					<h1>Create a new Artist or Venue account!</h1>
					<Card className = "LoginCard">
					<div>
						<TextField
						hintText="Enter your Username"
						floatingLabelText="Username"
						/>
						<br />
						<TextField
						hintText="Enter an Email"
						floatingLabelText="Email"
						
						/>
						<br />
						<TextField
						hintText="Create a Password"
						floatingLabelText="Password"
						type="password"
						/>
						<br />
						<TextField
						hintText="Confirm Password"
						floatingLabelText="Confirm Password"
						type="password"
						/>
					</div>
					<br/>
					
					<CardActions>
					<RaisedButton label ="Sign Up!" primary = {true} style= {buttonStyle}/>
					<br/>
					<Link to="./login">
    <RaisedButton label = "Already have an Account?" primary = {true} style= {buttonStyle}/>
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

export default SignupForm;
