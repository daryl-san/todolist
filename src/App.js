// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component, useRef } from 'react';
import Textbox from "./textbox"
// import Item from './item';
import { testArray } from "./testArray"

class App extends Component {



  constructor() {
    super();
    this.state = {
      Itemlist: []
    }
  }


  render() {



    function HandleAddItem(e) {
      const textfieldRef = useRef();
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
          <input type="text" ref={null} />
          <input type="button" value="add task" onClick={HandleAddItem} />
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
