import _ from 'lodash';
import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import {Link} from 'react-router-dom';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../nav_bar/nav_bar';
import { Container, Row, Col} from 'react-grid-system';
import DatePicker, {Calendar} from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



import pic from './images/btbam.jpg';

class Profile extends Component{

  constructor(props){
    super(props);

    this.state = {
      open: false,
      bandName : 'Between The Buried and mme :D:D:D:D:D:D:D',
      location : 'Raleigh, North Carolina',
      bio: 'Between the Buried and Me is an American progressive metal band from Raleigh, North Carolina. Formed in 2000, the band consists of Tommy Giles Rogers, Jr. (lead vocals, keyboards), Paul Waggoner (guitars, backing vocals), Dustie Waring (guitars), Dan Briggs (bass, keyboards), and Blake Richardson (drums).',
      upcomingShows: [{showName:"first show"},
      {showName:"second show"},
      {showName:"third show"}],

      dateSelected: null,
      eventName:'',
      venueName:'',
      locationName:'',



    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleOpen = () => {
    this.setState({open : true});
  };

  handleClose = () => {
    this.setState({open : false});
  };

  handleClick(event){
    var apiBaseUrl = "http://localhost:5000";
    var payload={
    "date": this.state.dateSelected,
    "event":this.state.eventName,
    "venue":this.state.venueName,
    "location":this.state.locationName
    }
    axios.post(apiBaseUrl+'/profile', payload)
   .then( (response) => {
     console.log(response);
     if(response.status == 200){
       console.log("booking successfull");
			 this.setState({redirect: true});
     }
   })
   .catch((error) => {
     console.log(error);
   });

}



  render(){
    const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
    />,
    <FlatButton
      label="Book"
      primary={true}
      keyboardFocused={true}
      onClick={(event) => this.handleClick(event)}
    />
  ];


    return(
      <div>
          <MuiThemeProvider>
      <NavBar/>
        <h2>PROFILE PAGE</h2>

        <Container fluid style={{ lineHeight: '32px' }}>
  <Row>
    <Col xs={12} md={5}>
    <Card>

      <CardMedia
        overlay={<CardTitle title={this.state.bandName}subtitle={this.state.bandName} />}
      >
        <img src={pic} alt="" />
      </CardMedia>


    </Card>

    </Col>
    <Col xs={6} md={5} offset={{md:1}}>
    <center>
    <h3 style={{fontSize : 44}}>{this.state.bandName}</h3>
    <i>{this.state.location}</i>
    </center>
    <p>{this.state.bio}</p>
    </Col>
  </Row>
  <br />
  <Row >
    <Col xs={6}  ><h3>Upcoming Shows</h3>
    <ul>
    {this.state.upcomingShows.map((show)=>{
      return (
        <li>
        {show.showName}
        </li>
      )
    })}
    </ul>
</Col>

    <Col xs={4}  >
    <center>
    <RaisedButton
      onClick = {this.handleOpen}
      label = "Request a Booking"
    />
    <Dialog
      title = {"Fill out this form to book "+this.state.bandName}
      actions = {actions}
      modal = {false}
      open = {this.state.open}
      onRequestClose = {this.handleClose}>

      <DatePicker hintText = "Pick a date"
      onChange = {(event, newValue) => this.setState({dateSelected:newValue})}
      />
      <TextField
     hintText = "Event Name"
     floatingLabelText="What's the event name?"
     onChange = {(event, newValue) => this.setState({eventName:newValue})}
   />
      <br/>
      <TextField
           hintText = "Venue Name"
           floatingLabelText="Which venue is it at?"
           onChange = {(event, newValue) => this.setState({venueName:newValue})}
         />      <br/>
         <TextField
              hintText = "Venue Location"
              floatingLabelText="Where is it located?"
              onChange = {(event, newValue) => this.setState({locationName:newValue})}
            />      <br/>
      </Dialog>
    </center>
    </Col>
  </Row>
  <br />

</Container>

        </MuiThemeProvider>
      </div>
    )
  }

}
 export default Profile;
