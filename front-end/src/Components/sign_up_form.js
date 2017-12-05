import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './nav_bar/nav_bar';

import "../App.css"


	const buttonStyle = {
    margin: 8,
};
class SignupForm extends Component{

handleClick(event){
    var apiBaseUrl = "http://localhost:5000";
    console.log("values",this.state.first_name,this.state.email,this.state.password,this.state.confirm);
    //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "email":this.state.email,
    "password":this.state.password,
    "confirm":this.state.confirm
    }
    axios.post(apiBaseUrl+'/signup', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code == 200){
       console.log("registration successfull");
      /*  var loginscreen=[];
       loginscreen.push(<Login parentContext={this}/>);
       var loginmessage = "Not Registered yet.Go to registration";
       self.props.parentContext.setState({loginscreen:loginscreen,
       loginmessage:loginmessage,
       buttonLabel:"Register",
       isLogin:true */
      //  });
     }
   })
   .catch(function (error) {
     console.log(error);
   });

}
	  constructor(props){
    super(props);
    this.state={
      first_name:'',
      email:'',
      password:'',
	  confirm:''
	  }}

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
						onChange = {(event,newValue) => this.setState({first_name:newValue})}
						/>
						<br />
						<TextField
						hintText="Enter an Email"
						floatingLabelText="Email"
						onChange = {(event,newValue) => this.setState({email:newValue})}

						/>
						<br />
						<TextField
						hintText="Create a Password"
						floatingLabelText="Password"
						type="password"
						onChange = {(event,newValue) => this.setState({password:newValue})}
						/>
						<br />
						<TextField
						hintText="Confirm Password"
						floatingLabelText="Confirm Password"
						type="password"
						onChange = {(event,newValue) => this.setState({confirm:newValue})}
						/>
					</div>
					<br/>

					<CardActions>
					<RaisedButton label ="Sign Up!" primary = {true} style= {buttonStyle} onClick={(event) => this.handleClick(event)}/>
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
