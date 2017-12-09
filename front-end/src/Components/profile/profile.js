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

import Popover from 'material-ui/Popover';

import pic from './images/btbam.jpg';

class Profile extends Component{

  constructor(props){
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open:false,
    });
  };
  render(){
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
        overlay={<CardTitle title="BTBAM" subtitle="Between the Buried and Me" />}
      >
        <img src={pic} alt="" />
      </CardMedia>


    </Card>

    </Col>
    <Col xs={6} md={5} offset={{md:1}}>
    <center>
    <h3 style={{fontSize : 44}}>Between The Buried and Me</h3>
    <i>Raleigh, North Carolina</i>
    </center>
    <p>Between the Buried and Me is an American progressive metal band from Raleigh, North Carolina. Formed in 2000, the band consists of Tommy Giles Rogers, Jr. (lead vocals, keyboards), Paul Waggoner (guitars, backing vocals), Dustie Waring (guitars), Dan Briggs (bass, keyboards), and Blake Richardson (drums).</p>
    </Col>
  </Row>
  <br />
  <Row >
    <Col xs={6}  ><h3>Upcoming Shows</h3>
    <ul>
    <li>Chuckie cheese</li>
      <li>FIU ECS lab</li>
        <li>PG6</li>
          <li>golden corral</li>
            <li>cracker barrel</li>
    </ul>
</Col>

    <Col xs={4}  >
    <center>
    <RaisedButton
      onClick = {this.handleTouchTap}
      label = "See available booking dates"
    />
    <Popover
      open = {this.state.open}
      anchorEl = {this.state.anchorEl}
      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
      onRequestClose = {this.handleRequestClose}
    >
    <DatePicker/>
    </Popover>
    
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
