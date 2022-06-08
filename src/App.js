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

  onItemCheck = (event) => {
    //filter out the selected task.
    var filteredList = this.state.Itemlist.filter(item => {
      if (parseInt(item.number) !== parseInt(event.target.value)) {
        return item;
      } else {
        return null;
      }
    })

    // below was just for testing it's returning the desired result
    // var txt = "";
    // filteredList.forEach(item => {
    //   txt += item.task + " ";
    // });
    // console.log("filtered list: " + txt);

    // console.log("box has been ticked!: " + event.target.value);
    this.setState({
      Itemlist: filteredList
    })
  };

  onSubmit = (event) => {
    event.preventDefault();


    const txt = this.state.textfield;
    //display default response if null / field empty
    var newItem = [];

    if (txt === null || txt.trim() === '') {
      alert("Field empty / no input detected");
    } else {
      newItem = {
        task: txt,
        number: this.state.Itemlist.length + 1, //New ITEM's number
        complete: false
      }
      this.state.Itemlist.push(newItem);
    }

    this.setState({
      Itemlist: this.state.Itemlist, //update item list in state
      textfield: '' //clear textfield variable in state
    });

    event.target.reset(); //reset event to clear textfield
  };

  txtFieldHandler = (event) => {
    this.setState(
      {
        textfield: event.target.value,
      }
    )

    // console.log(this.state.textfield);
  };



  render() {
    return !Itemlist.length ?
      <h1>Loading...</h1> :
      (
        <div>
          <Textbox onSubmit={this.onSubmit} txtFieldValue={this.state.textfield.value} txtFieldHandler={this.txtFieldHandler} />
          {/* <input type="button" value="reset" /> */}

          <h1>My item List</h1>
          <div>
            <Itemlist item={this.state.Itemlist} checkboxHandler={this.onItemCheck} />
          </div>
        </div>
      );
  };

}




export default App;
