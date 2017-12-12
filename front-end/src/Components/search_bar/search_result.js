import React, { Component } from "react";
import NavBar from "../nav_bar/nav_bar";
import SearchBar from "./search_bar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

var cardStyle = {
   display: 'block',
   width: '10',
   height: '10'
}


class SearchResult extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
    this.state = {
      resList: {},
      query: this.props.location.state.search_query,
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);

  }

  componentDidMount() {
    var apiBaseUrl = "http://localhost:5000";
    var payload = {
      search: this.props.location.state.search_query
    };
    axios
      .post(apiBaseUrl + "/search", payload)
      .then(response => {
        console.log(response.data[0]);
        this.setState({
          name: response.data[0].name,
          capacity: response.data[0].capacity,
          location: response.data[0].city + ", " + response.data[0].state,
          bio: response.data[0].about
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(event){
    this.setState({redirect:true})
  }

  render() {
    if(this.state.redirect){
      return(
        <Redirect
          to={{
            pathname: "/profile",
            state: { name: this.state.name}
          }}
        />
      )
    }
    return (
      <div>
        <MuiThemeProvider>
          <NavBar />
          <center>
            <SearchBar resultPage={true} />
          </center>
          <h1> Results for {this.state.query} </h1>
          <Card style={cardStyle}>
            <CardHeader
              title= {this.state.name}
              subtitle={this.state.location}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="View"
                onClick={this.handleClick}
              />
            </CardActions>
            <CardText expandable={true}>
              {this.state.bio}
            </CardText>
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default SearchResult;
