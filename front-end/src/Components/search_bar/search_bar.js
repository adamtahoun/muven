import React, {Component} from 'react';
import { Card } from 'material-ui/Card';
import "./search_bar.css"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';






class SearchBar extends Component {


render(){
  return(
    <div className="SearchBar">

    <Card className= "SearchBar-card">
    <div style={{width:750}}>
    <TextField hintText = "Search by name or location!"
      fullWidth={true}
      className="SearchBar-input"
    />
    </div>
    <RaisedButton className="SearchBar-button">Search</RaisedButton>
    </Card>
    </div>
  )
}

}

export default SearchBar;
