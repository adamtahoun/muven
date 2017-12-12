import React, {Component} from 'react';
import { Card } from 'material-ui/Card';
import {Link,  Redirect} from 'react-router-dom';

import "./search_bar.css"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
      redirect: false,
      search_query: ""
    }
    this.handleClick = this.handleClick.bind(this);
    console.log(this.props);
  }

  handleClick(event){
    this.setState({redirect:true})
  }

render(){

  if (this.state.redirect && !this.props.resultPage) {
    return(
    <Redirect
      to={{
        pathname: "/results",
        state: { search_query: this.state.search_query }
      }}
    />
  );
  }

  return(
    <div className="SearchBar">
    <Card className= "SearchBar-card">
    <div style={{width:750}}>
    <TextField hintText = "Search by name or location!"
      fullWidth={true}
      className="SearchBar-input"
      onChange={(event,newValue) =>
        this.setState({search_query:newValue})
      }
    />
    </div>
    <RaisedButton className="SearchBar-button" onClick={(event) => this.handleClick(event)}>Search</RaisedButton>
    </Card>
    </div>
  )
}

}

export default SearchBar;
