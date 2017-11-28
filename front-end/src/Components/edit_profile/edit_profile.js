import React, { Component } from 'react';
import { Card, CardActions } from 'material-ui/Card';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
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


class EditProfile extends Component{

  constructor(props) {
   super(props);
   this.state = {
     value: 'artist',
   };
 }

 handleChange = (value) => {
   this.setState({
     value: value,
   });
 };

  render(){
    return(
      <div className="EditProfile">
        <MuiThemeProvider>
          <NavBar/>
          <Card className="EditProfileCard">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            >
            <Tab label="Artist" value="artist">
              <div>
                <h2>Please Enter Artist Info</h2>
              </div>
            </Tab>
            <Tab label="Venue" value="venue">
              <div>
                <h2>Please Enter Venue Info</h2>
              </div>
            </Tab>
          </Tabs>
         </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default EditProfile;
