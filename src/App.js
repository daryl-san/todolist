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
    // const testArray = {
    //   new Item(task = "Cook Lunch", number = 1),
    //   new Item(task = "Wash Laundry", number = 2),
    //   new Item(task = "Feed Pets", number = 3),
    //   new Item(task = "Practice Coding", number = 4
    // };

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
            {
              testArray.forEach(Item => {
                <itemlist Item />
              })
            }
          </div>
          {/* <itemlist item={testList} /> */}
        </div>
      );
  };
}

export default App;
