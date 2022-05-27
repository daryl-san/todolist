// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component } from 'react';
// import Item from './item';

class App extends Component {



  constructor() {
    super();
    this.state = {
      Itemlist: []
    }
  }


  render() {
    // return (<h1>Loading...</h1>)

    const testArray = [
      {
        task: "Clean Room",
        number: "1"
      },
      {
        task: "Do Laundry",
        number: "2"
      },
      {
        task: "Feed Cats",
        number: "3"
      },
      {
        task: "Fold Clothes",
        number: "4"
      },
      {
        task: "Go Gym",
        number: "5"
      }
    ];


    return !Itemlist.length ?
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
            <Itemlist item={testArray} />
            {console.log(testArray.value)}
          </div>
        </div>
      );
  };
}

export default App;
