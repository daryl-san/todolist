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
    //later add a way to handle check and uncheck events.


    var condition = false;

    if (this.tempList[event.target.value - 1] != null) {
      condition = true;
    }

    // var tempListLength = this.state.tempList.length;

    if (!condition) {
      this.state.tempList.push(this.state.Itemlist[event.target.value - 1]);
    } else {
      // for (var i = 0; i < tempListLength; i++) {
      //   if (this.state.tempList[i].number === event.target.value) {
      //     this.state.tempList.splice(i, 1);
      //   }
      // }
      // this.state.tempList.splice(event.target.value - 1, 1);
      this.state.tempList.remove(this.state.tempList[event.target.value - 1]);
    }


    this.checkLists();
  };

  testFunction = (event) => {
    // alert(this.state.tempList.length);
    event.preventDefault();
    console.log(this.state.tempList.length);
  }

  checkNewArray(arr) {
    console.log("newArray: " + arr.length)
  }

  checkLists() {


    // this.state.tempList.forEach((t) => {
    //   console.log(t.number + ": " + t.task);
    // });
    console.log("templist: " + this.state.tempList);
    // console.log("Itemlist: " + this.state.Itemlist.length);
  }

  filterList = () => {
    //remove the similar contents of list2 from list1 and store in state.itemList


    const newArray = this.state.Itemlist.filter((item) => {
      return this.state.tempList.some((filter) => {
        return filter.number !== item.number;
      });
    });

    this.setState({
      Itemlist: newArray,
      tempList: []
    })

    // currently fixing error with filter.
    // this.checkLists();
    // this.checkNewArray(newArray);
  }

  refreshList = (event) => {
    //store content of tempList in Itemlist then empty tempList
    event.preventDefault();
    if (this.state.tempList.length > 0) {


      this.filterList();

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
            {/* below is just for testing */}
            {/* <ListRefresher refreshEventHandler={this.testFunction} /> */}
            <Itemlist item={this.state.Itemlist} checkboxHandler={this.onItemCheck} />


          </div>
        </div>
      );
  };

}




export default App;
