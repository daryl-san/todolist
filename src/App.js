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
      Itemlist: []
    }
  }


  render() {
    let testArray2 = testArray;
    // function HandleAddItem(e) {
    //   const textfieldRef = useRef();
    //   const name = textfieldRef.current.value
    //   if (!name.length) {
    //     console.log(name);
    //   }
    // }

    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Textbox />
          {/* <input type="text" ref={null} placeholder="Enter new task" /> */}
          {/* <input type="button" value="add task" /> */}
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
            <Itemlist item={testArray2} />
            {console.log(testArray2.value)}
          </div>
        </div>
      );
  };
}

export default App;
