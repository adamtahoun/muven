import React, {Component} from 'react';
import NavBar from '../nav_bar/nav_bar';
import SearchBar from './search_bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SearchResult extends Component{

    constructor(props){
      super(props);
      this.state = {
        resList : {}
      }
    }

    render(){

      return(
        <div>
        <MuiThemeProvider>
        <NavBar/>
        <center>
        <SearchBar resultPage={true}/>
        </center>
        </MuiThemeProvider>
        </div>
      )
    }

}

export default SearchResult;
