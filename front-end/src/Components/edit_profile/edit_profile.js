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


class EditProfile extends Component{

  constructor(props) {
   super(props);
   this.state = {
     value: 'artist',
     artist: {
       name: '',
       address: '',
       city: '',
       state: '',
       genre:'',
     }
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
              <Paper zDepth={2}>
                <TextField hintText="Artist name" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="Address" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="City" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="State" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="Genre" style={style} underlineShow={false} />
                <Divider />
                <TextField hintText="About" style={style} underlineShow={false} />
            </Paper>
              </div>
            </Tab>
            <Tab label="Venue" value="venue">
            <Paper zDepth={2}>
              <TextField hintText="Venue name" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Address" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="City" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Capacity" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Max Bands" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="Genre" style={style} underlineShow={false} />
              <Divider />
              <TextField hintText="About" style={style} underlineShow={false} />
              <Divider />
          </Paper>
            </Tab>
          </Tabs>
         </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default EditProfile;
