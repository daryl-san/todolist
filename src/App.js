// import logo from './logo.svg';
import './App.css';
import Itemlist from './itemlist';
import React, { Component } from 'react';
import Textbox from "./textbox"
import ListRefresher from './ListRefresher';
// import { testArray } from "./testArray"


class App extends Component {


  constructor() {
    super();
    this.state = {
      // testArray: testArray,
      Itemlist: [],
      textfield: '',
      tempList: []
    }
  }


  /*
  NOTES:
  at the moment we're storing a filtered list into state by assigning it into 'tempList',
  however this causes issue when there's only 1 item on the list and when it's checked off
  it results in an empty array being stored in 'tempList'.

  Currently train of thought is that a work around this is to add the 'checked' items into a
  separate list (possibly templist), and when 'refresh button' is clicked it will then 
  filter out the 'checked' from itemList by comparing it with items stored in tempList, THEN update
  the view.
  */

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

    //store new list on tempList variable in state.
    this.setState({
      tempList: filteredList
    })
  };

  testFunction = (event) => {
    alert(this.state.tempList);
  }

  refreshList = (event) => {
    //store content of tempList in Itemlist then empty tempList
    event.preventDefault();
    if (this.state.tempList != "") {
      this.setState({
        Itemlist: this.state.tempList,
        tempList: []
      })

      // alert("itemList length: " +
      //   this.state.Itemlist.length +
      //   " tempList Length: " +
      //   this.state.tempList.length
      // );
    } else {
      alert("no item selected")
    }
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
            <ListRefresher refreshEventHandler={this.refreshList} />
            <Itemlist item={this.state.Itemlist} checkboxHandler={this.onItemCheck} />


          </div>
        </div>
      );
  };

}




export default App;
