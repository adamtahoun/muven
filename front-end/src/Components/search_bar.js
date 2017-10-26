import React, {Component} from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: "100px",
};

class SearchBar extends Component {



render(){
  return(
    <Card style={style}>

    <TextField hintText = "Search by name or location!"/>
    <RaisedButton>Search</RaisedButton>
    </Card>
  )
}

}

export default SearchBar;
