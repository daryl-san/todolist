// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component } from 'react';
import Textbox from "./textbox"
// import { testArray } from "./testArray"


class App extends Component {


  constructor() {
    super();
    this.state = {
      // testArray: testArray,
      Itemlist: [],
      textfield: ''
    }
  }

  //Event Listeners

  onSubmit = (event) => {
    event.preventDefault();

    //display default response if null / field empty
    const txt = this.state.textfield;
    this.setState({ //clear textfield once value is stored in txt
      textfield: ''
    });
    var newItem = [];
    if (txt === null || txt.trim() === '') {
      alert("Field empty / no input detected");
    } else {
      newItem = {
        task: txt,
        number: this.state.Itemlist.length + 1,
        complete: false
      }
      this.state.Itemlist.push(newItem);
    }
    this.setState({
      Itemlist: this.state.Itemlist
    });
  };

  txtFieldHandler = (event) => {
    this.setState(
      {
        textfield: event.target.value,
      }
    )

    // console.log(this.state.textfield);
  }

  render() {
    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Textbox onSubmit={this.onSubmit} txtFieldValue={this.state.textfield.value} txtFieldHandler={this.txtFieldHandler} />
          {/* <input type="button" value="reset" /> */}

          <h1>My item List</h1>
          <div>
            <Itemlist item={this.state.Itemlist} />
          </div>
        </div>
      );
  };

}




export default App;
