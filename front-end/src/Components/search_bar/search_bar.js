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
    <TextField hintText = "Search by name or location!"
      fullWidth={false}
      className="SearchBar-input"
    />
    <RaisedButton>Search</RaisedButton>
    </Card>
    </div>
  )
}

}

export default SearchBar;
