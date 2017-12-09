import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../nav_bar/nav_bar';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const style = {
  marginLeft: 20,
};

const buttonStyle = {
  margin: 8,
};

class EditProfile extends Component{

  constructor(props) {
   super(props);
   console.log(this.props);
   this.state = {
     value: 'artist',
     artist_name: '',
     artist_address: '',
     artist_city: '',
     artist_state: '',
     artist_genre:'',
     artist_about:'',
     venue_name:'',
     venue_address: '',
     venue_city: '',
     venue_state: '',
     venue_max_bands:'',
     venue_capacity: '',
     venue_genre:'',
     venue_about:''
   };
   console.log(this.state);
  
 };

 handleChange = (value) => {
   this.setState({
     value: value,
   });
 };

 handleClick(event){
   var apiBaseUrl = "http://localhost:5000";
   console.log(this.state);
 };

  render(){
    return(
      <div className="EditProfile">
        <MuiThemeProvider>
          <NavBar/>
          <center>
        <h1> Edit your profile!</h1>
          <Card className="EditProfileCard">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            >
            <Tab label="Artist" value="artist">
              <div>
              <Paper zDepth={2}>
                <TextField
                  hintText="Artist name"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_name:newValue})}
                />
                <Divider />
                <TextField
                  hintText="Address"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_address:newValue})}
                />
                <Divider />
                <TextField
                  hintText="City"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_city:newValue})}
                />
                <Divider />
                <TextField
                  hintText="State"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_state:newValue})}
                />
                <Divider />
                <TextField
                  hintText="Genre"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_genre:newValue})}
                />
                <Divider />
                <TextField
                  hintText="About"
                  style={style}
                  underlineShow={false}
                  onChange = {(event,newValue) => this.setState({artist_about:newValue})}
                />
            </Paper>
              </div>
            </Tab>
            <Tab label="Venue" value="venue">
            <Paper zDepth={2}>
              <TextField
                hintText="Venue name"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_name:newValue})}
              />
              <Divider />
              <TextField
                hintText="Address"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_address:newValue})}
              />
              <Divider />
              <TextField
                hintText="City"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_city:newValue})}
              />
              <Divider />
              <TextField
                hintText="Capacity"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_capacity:newValue})}
              />
              <Divider />
              <TextField
                hintText="Max Bands"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_max_bands:newValue})}
              />
              <Divider />
              <TextField
                hintText="Genre"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_genre:newValue})}
              />
              <Divider />
              <TextField
                hintText="About"
                style={style}
                underlineShow={false}
                onChange = {(event,newValue) => this.setState({venue_about:newValue})}
              />
              <Divider />
          </Paper>
            </Tab>
          </Tabs>
            <Link to="./profile">
              <RaisedButton label ="Cancel" primary = {true} style= {buttonStyle} onClick={(event) => this.handleClick(event)}/>
            </Link>
            <RaisedButton label ="Submit" primary = {true} style= {buttonStyle} onClick={(event) => this.handleClick(event)}/>
         </Card>
         </center>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default EditProfile;
