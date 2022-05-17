import logo from './logo.svg';
import './App.css';
import itemlist from './itemlist';
import React, { Component } from 'react';

class App() extends Component{

  constructor() {
    super();
    this.state = {
      itemlist: []
    }
  }

  return !itemlist.length ?
    <h1>Loading...</h1> :
    (
      <div>
        <h1>My item List</h1>
      </div>
    );
}

export default App;
