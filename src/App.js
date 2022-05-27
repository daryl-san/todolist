// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component, useRef } from 'react';
import Textbox from "./textbox"
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
    const textfieldRef = useRef();
    const testArray = [
      {
        task: "Clean Room",
        number: "1",
        complete: false
      },
      {
        task: "Do Laundry",
        number: "2",
        complete: false
      },
      {
        task: "Feed Cats",
        number: "3",
        complete: true
      },
      {
        task: "Fold Clothes",
        number: "4",
        complete: false
      },
      {
        task: "Go Gym",
        number: "5",
        complete: false
      }
    ];

    function handleAddItem(e) {
      const name = textfieldRef.current.value
      if (!name.length) {
        console.log(name);
      }
    }

    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          {/* <Textbox useRef="useRef" /> */}
          <input type="text" ref={textfieldRef} />
          <input type="button" value="add task" onClick={handleAddItem} />
          <input type="button" value="reset" />

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
