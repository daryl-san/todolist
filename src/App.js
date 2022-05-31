// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component } from 'react';
import Textbox from "./textbox"
import { testArray } from "./testArray"


class App extends Component {


  constructor() {
    super();
    this.state = {
      testArray: testArray,
      Itemlist: [],
      textfield: ''
    }
  }

  //Event Listeners

  onSubmit = (event) => {
    event.preventDefault();
    alert("entered: " + this.state.textfield.value);
  };

  render() {
    // alert(this.state.textfield.value);
    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Textbox onSubmit={this.onSubmit} />
          <input type="button" value="reset" />

          <h1>My item List</h1>
          <div>
            <Itemlist item={this.state.testArray} />
          </div>
        </div>
      );
  };

}




export default App;
