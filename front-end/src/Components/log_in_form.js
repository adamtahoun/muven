import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar/nav_bar';

import "../App.css"



class LoginForm extends Component{

handleClick(event){
	var apiBaseUrl = "http://localhost:5000";
	var self = this;
	var payload={
	 "username":this.state.username,
	 "password":this.state.password
 	}
 axios.post(apiBaseUrl+'/login', payload)
 .then( (response) => {
 console.log(response);
 if(response.data.code == 200){
 	console.log("Login successfull");
 }
 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });
 }

   constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
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
						onChange = {(event,newValue) => this.setState({username:newValue})}
						/>
						<br />
						<TextField
						hintText="Password Field"
						floatingLabelText="Password"
						type="password"
						onChange = {(event,newValue) => this.setState({password:newValue})}
						/>
					</div>
					<br/>
					<br/><br/>
					<CardActions>
					<RaisedButton label ="Login"
					onClick={(event) => this.handleClick(event)} />
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
