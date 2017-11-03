import React, {Component} from 'react';
import { Card } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: "1000",
  width: 900,
};




class SearchBar extends Component {


render(){
  return(
    <div>
    <Card style={style}>
    <TextField hintText = "Search by name or location!"
      fullWidth={false}
      style={{width:800}}
    />
    <RaisedButton>Search</RaisedButton>
    </Card>
    </div>
  )
}

}

export default SearchBar;
