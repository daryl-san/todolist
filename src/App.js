// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component } from 'react';
import Textbox from "./textbox"
import { testArray } from "./testArray"
import { onItemAdd } from "./eventListener"

class App extends Component {


  constructor() {
    super();
    this.state = {
      testArray: testArray,
      Itemlist: []
    }
  }


  render() {

    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Textbox itemAdd={this.onItemAdd} />
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
