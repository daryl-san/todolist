import logo from './logo.svg';
import './App.css';
import itemlist from './itemlist';
import React, { Component } from 'react';
import Item from './item';

class App extends Component {

  constructor() {
    super();
    this.state = {
      itemlist: []
    }
  }


  render() {
    // return (<h1>Loading...</h1>)

    // const testList = [];

    return !itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <h1>My item List</h1>
          {/* <ol>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
          </ol> */}
          <div>
            <Item task="item 1" number="1" />
            <Item task="item 2" number="2" />
            <Item task="item 3" number="3" />
          </div>
          {/* <itemlist item={testList} /> */}
        </div>
      );
  };
}

export default App;
